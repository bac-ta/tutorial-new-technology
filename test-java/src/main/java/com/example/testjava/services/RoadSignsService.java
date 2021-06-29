package com.example.testjava.services;

import com.example.testjava.models.dtos.RoadSignsDto;
import com.example.testjava.models.entities.RoadSigns;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * This interface provide methods handle logic
 *
 * @author bac-ta
 * @see RoadSignsService
 * @since 2021-06-28
 */
@Service
public interface RoadSignsService {
    List<RoadSignsDto> fetchRoadSignsFromBucket();

    List<RoadSigns> saveRoadSignsToDb(List<RoadSignsDto> roadSignsDtoList);

    void sendKafkaTopic(List<RoadSigns> roadSignsList);
}
