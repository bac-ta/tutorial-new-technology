package com.example.testjava.repositories.customs;

import com.example.testjava.models.dtos.RoadSignsDto;
import org.springframework.stereotype.Repository;

import java.util.List;
/**
 * This interface custom contains methods to query the table 'road_signs'
 *
 * @author bac-ta
 * @see RoadSignsRepositoryCustom
 * @since 2021-06-29
 */
@Repository
public interface RoadSignsRepositoryCustom {
    List<RoadSignsDto> findRoadSignsList(List<RoadSignsDto> roadSignsDtoList);
}
