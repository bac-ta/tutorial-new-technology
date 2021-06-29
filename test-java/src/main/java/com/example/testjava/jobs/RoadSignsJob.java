package com.example.testjava.jobs;

import com.example.testjava.models.dtos.RoadSignsDto;
import com.example.testjava.models.entities.RoadSigns;
import com.example.testjava.services.RoadSignsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * This class creates scheduling cron job every 5 minutes
 *
 * @author bac-ta
 * @see RoadSignsJob
 * @since 2021-06-28
 */
@Component
public class RoadSignsJob {
    private final RoadSignsService roadSignsService;

    @Autowired
    public RoadSignsJob(RoadSignsService roadSignsService) {
        this.roadSignsService = roadSignsService;
    }

    //    @Scheduled(cron = "0 0/5 * * * *")
    @Scheduled(cron = "* * * * * *")
    private void job() {
        List<RoadSignsDto> roadSignsDtoList = roadSignsService.fetchRoadSignsFromBucket();
        List<RoadSigns> roadSignsList = roadSignsService.saveRoadSignsToDb(roadSignsDtoList);
        roadSignsService.sendKafkaTopic(roadSignsList);
    }
}
