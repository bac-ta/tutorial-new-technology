package com.example.testjava.repositories;

import com.example.testjava.models.entities.RoadSigns;
import com.example.testjava.repositories.customs.RoadSignsRepositoryCustom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * This interface contains methods to query the table 'road_signs'
 *
 * @author bac-ta
 * @see RoadSignsRepository
 * @since 2021-06-28
 */
@Repository
public interface RoadSignsRepository extends JpaRepository<RoadSigns, String>, RoadSignsRepositoryCustom {
}
