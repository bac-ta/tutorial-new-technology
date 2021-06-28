package com.example.testjava.services.impls;

import com.example.testjava.models.entities.RoadSigns;
import com.example.testjava.services.RoadSignsService;
import com.example.testjava.utils.AppConstant;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

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
        RestTemplate restTemplate = new RestTemplate();
        final String url = String.format(AppConstant.GOOGLE_CLOUD_STORE_API_ENDPOINT_BASE, bucketName);




        return null;
    }

    @Override
    public void saveRoadSignsToDb() {

    }

    @Override
    public void sendKafkaTopic() {

    }
}
