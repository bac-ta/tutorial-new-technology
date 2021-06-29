package com.example.testjava.models.entities;

import com.example.testjava.utils.AppConstant;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldNameConstants;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;
import java.io.Serializable;
import java.time.LocalDateTime;


/**
 * This class mapping with "road_signs" table
 *
 * @author bac-ta
 * @see RoadSigns
 * @since 2021-06-28
 */
@Entity
@Table(name = "road_signs")
@Data
@AllArgsConstructor
@NoArgsConstructor
@FieldNameConstants
@IdClass(RoadSignsPrimaryKey.class)
@EnableJpaAuditing
@EntityListeners(AuditingEntityListener.class)
public class RoadSigns {
    @Id
    @Column
    private String name;
    @Id
    @Column
    private String size;
    @Column(name = "update_time")
    @JsonProperty("update_time")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = AppConstant.TIME_FORMAT)
    @LastModifiedDate
    private LocalDateTime updateTime;
}

/**
 * This class defines composite primary key for entity {@link RoadSignsPrimaryKey}
 *
 * @author bac-ta
 * @see RoadSignsPrimaryKey
 * @since 2021-06-28
 */
@Data
final class RoadSignsPrimaryKey implements Serializable {
    private String name;
    private String size;
}