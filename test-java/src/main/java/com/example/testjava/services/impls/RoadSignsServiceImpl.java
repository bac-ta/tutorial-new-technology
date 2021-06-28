package com.example.testjava.services.impls;

import com.example.testjava.models.entities.RoadSigns;
import com.example.testjava.services.RoadSignsService;
import com.google.cloud.storage.Blob;
import com.google.cloud.storage.Bucket;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Class implement {@link RoadSignsService}
 *
 * @author bac-ta
 * @see RoadSignsServiceImpl
 * @since 2021-06-28
 */
@Service
public class RoadSignsServiceImpl implements RoadSignsService {
    @Value("${cloud-storage.bucket-name}")
    private String bucketName;

    @Override
    public List<RoadSigns> fetchRoadSignsFromBucket() {
        Storage storage = StorageOptions.getDefaultInstance().getService();
        Bucket bucket = storage.get(bucketName);
        if (bucket != null) {
            for (Blob blob : bucket.list().iterateAll()) {
                System.out.printf(" - %s\n", blob.getName());
                System.out.println("   " + blob);
            }
        }

        return null;
    }

    @Override
    public void saveRoadSignsToDb() {

    }

    @Override
    public void sendKafkaTopic() {

    }
}
