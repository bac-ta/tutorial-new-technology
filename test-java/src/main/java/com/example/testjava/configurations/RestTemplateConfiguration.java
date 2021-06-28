package com.example.testjava.configurations;

import com.example.testjava.utils.AppConstant;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

import java.time.Duration;

/**
 * Class config spring rest template
 *
 * @author bac-ta
 * @see RestTemplateConfiguration
 * @since 2021-05-31
 */
@Configuration
public class RestTemplateConfiguration {
    @Bean
    public RestTemplate restTemplate(RestTemplateBuilder restTemplateBuilder) {
        return restTemplateBuilder
                .setConnectTimeout(Duration.ofMillis(AppConstant.REST_TEMPLATE_CONNECTION_TIMEOUT))
                .setReadTimeout(Duration.ofMillis(AppConstant.REST_TEMPLATE_READ_TIMEOUT))
                .build();
    }
}
