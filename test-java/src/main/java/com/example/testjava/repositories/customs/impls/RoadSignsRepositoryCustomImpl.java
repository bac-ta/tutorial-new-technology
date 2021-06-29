package com.example.testjava.repositories.customs.impls;

import com.example.testjava.models.dtos.RoadSignsDto;
import com.example.testjava.models.entities.RoadSigns;
import com.example.testjava.repositories.customs.RoadSignsRepositoryCustom;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

/**
 * This class implements {@link RoadSignsRepositoryCustom}
 *
 * @author bac-ta
 * @see RoadSignsRepositoryCustomImpl
 * @since 2021-06-29
 */
@Repository
public class RoadSignsRepositoryCustomImpl implements RoadSignsRepositoryCustom {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<RoadSignsDto> findRoadSignsList(List<RoadSignsDto> roadSignsDtoList) {
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<RoadSignsDto> criteriaQuery = criteriaBuilder.createQuery(RoadSignsDto.class);
        Root<RoadSigns> root = criteriaQuery.from(RoadSigns.class);

        List<Predicate> predicates = new ArrayList<>();
        roadSignsDtoList.forEach(dto -> {
            String name = dto.getName();
            String size = dto.getSize();

            predicates.add(criteriaBuilder.and(
                    criteriaBuilder.equal(root.get(RoadSigns.Fields.name), name),
                    criteriaBuilder.equal(root.get(RoadSigns.Fields.size), size)));
        });

        criteriaQuery.where(criteriaBuilder.or(predicates.toArray(new Predicate[0])));
        TypedQuery<RoadSignsDto> typedQuery = entityManager.createQuery(criteriaQuery);

        return typedQuery.getResultList();
    }
}
