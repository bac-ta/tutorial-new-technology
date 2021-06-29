package com.example.testjava.models.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * This class road signs data transfer object
 *
 * @author bac-ta
 * @see RoadSignsDto
 * @since 2021-06-29
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RoadSignsDto {
    private String name;
    private String size;
}
