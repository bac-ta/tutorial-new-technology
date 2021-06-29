package com.example.testjava.services.impls;

import com.example.testjava.models.dtos.RoadSignsDto;
import com.example.testjava.models.entities.RoadSigns;
import com.example.testjava.repositories.RoadSignsRepository;
import com.example.testjava.services.RoadSignsService;
import com.example.testjava.utils.AppConstant;
import com.google.cloud.ReadChannel;
import com.google.cloud.storage.Blob;
import com.google.cloud.storage.Bucket;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;
import lombok.SneakyThrows;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.nio.ByteBuffer;
import java.nio.channels.Channels;
import java.nio.channels.WritableByteChannel;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Class implement {@link RoadSignsService}
 *
 * @author bac-ta
 * @see RoadSignsServiceImpl
 * @since 2021-06-28
 */
@Service
public class RoadSignsServiceImpl implements RoadSignsService {
    private final RoadSignsRepository roadSignsRepository;
    private final KafkaTemplate<String, RoadSigns> kafkaTemplate;

    @Value("${cloud-storage.bucket-name}")
    private String bucketName;
    @Value("${kafka.topic}")
    private String kafkaTopic;

    @Autowired
    public RoadSignsServiceImpl(RoadSignsRepository roadSignsRepository, KafkaTemplate<String, RoadSigns> kafkaTemplate) {
        this.roadSignsRepository = roadSignsRepository;
        this.kafkaTemplate = kafkaTemplate;
    }

    @SneakyThrows
    @Override
    public List<RoadSignsDto> fetchRoadSignsFromBucket() {
        Storage storage = StorageOptions.getDefaultInstance().getService();
        Bucket bucket = storage.get(bucketName);
        List<RoadSignsDto> roadSignsDtoList = new ArrayList<>();

        if (bucket != null) {
            for (Blob blob : bucket.list().iterateAll()) {
                //Only handle type is image/png
                if (!blob.getContentType().equals(MediaType.IMAGE_PNG_VALUE))
                    continue;

                String fileName = blob.getName();
                final String filePath = AppConstant.TMP_PATH + "/" + fileName;
                try {
                    //Fetch files and save to temporary store (ex: /tmp)
                    OutputStream outputStream = Files.newOutputStream(Paths.get(filePath));

                    long size = blob.getSize();
                    //If blob size is big or unknown we use the blob's channel reader
                    if (size > AppConstant.FILE_MAX_ALLOW_SIZE) {
                        try (ReadChannel reader = blob.reader()) {
                            WritableByteChannel channel = Channels.newChannel(outputStream);
                            ByteBuffer bytes = ByteBuffer.allocate(AppConstant.FILE_BYTE);
                            while (reader.read(bytes) > 0) {
                                bytes.flip();
                                channel.write(bytes);
                                bytes.clear();
                            }
                        }
                    } else {
                        ReadChannel readChannel = blob.reader();
                        FileOutputStream fileOutputStream = new FileOutputStream(filePath);
                        fileOutputStream.getChannel().transferFrom(readChannel, 0, Long.MAX_VALUE);
                        fileOutputStream.close();
                    }

                    //Read image file and get with , height
                    BufferedImage bufferedImage = ImageIO.read(new File(filePath));
                    int width = bufferedImage.getWidth();
                    int height = bufferedImage.getHeight();

                    roadSignsDtoList.add(new RoadSignsDto(fileName, width + "x" + height + " px"));
                } catch (Exception e) {
                    e.printStackTrace();
                } finally {
                    if (StringUtils.isNotBlank(fileName))
                        //Finally, need remove file in temporary stored
                        Files.delete(Paths.get(filePath));
                }
            }
        }

        return roadSignsDtoList;
    }

    @Override
    public List<RoadSigns> saveRoadSignsToDb(List<RoadSignsDto> roadSignsDtoList) {
        if (roadSignsDtoList.isEmpty())
            return new LinkedList<>();

        return roadSignsRepository.saveAll(roadSignsDtoList.stream()
                .map(dto -> {
                    RoadSigns roadSigns = new RoadSigns();
                    roadSigns.setName(dto.getName());
                    roadSigns.setSize(dto.getSize());
                    roadSigns.setUpdateTime(LocalDateTime.now(ZoneOffset.UTC).truncatedTo(ChronoUnit.SECONDS));

                    return roadSigns;
                })
                .collect(Collectors.toList()));
    }

    @Override
    public void sendKafkaTopic(List<RoadSigns> roadSignsList) {
        if (roadSignsList.isEmpty())
            return;

        roadSignsList.forEach(roadSigns -> kafkaTemplate.send(kafkaTopic, roadSigns));
    }
}

