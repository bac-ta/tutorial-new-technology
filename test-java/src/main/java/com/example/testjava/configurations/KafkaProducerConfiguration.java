package com.example.testjava.configurations;

import com.example.testjava.models.entities.RoadSigns;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;
import org.springframework.kafka.support.serializer.JsonSerializer;

import java.util.HashMap;
import java.util.Map;

/**
 * This class config kafka producer
 *
 * @author bac-ta
 * @see KafkaProducerConfiguration
 * @since 2021-06-29
 */
@Configuration
public class KafkaProducerConfiguration {
    @Value("${kafka.boostrap-server}")
    private String kafkaBootstrapServers;

    @Bean
    public ProducerFactory<String, RoadSigns> producerFactory() {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, kafkaBootstrapServers);
        configProps.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
        configProps.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class.getName());
        return new DefaultKafkaProducerFactory<>(configProps);
    }

    @Bean
    public KafkaTemplate<String, RoadSigns> userKafkaTemplate() {
        return new KafkaTemplate<>(producerFactory());
    }
}