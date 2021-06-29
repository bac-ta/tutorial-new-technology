package com.example.testjava;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class TestJavaApplication {

    public static void main(String[] args) {
        SpringApplication.run(TestJavaApplication.class, args);
    }

    //Method just for test
//    @KafkaListener(topics = "road.signs", groupId = "road.signs-group")
//    public void listen(String message) {
//        System.out.println("Received Message in group - group-id: " + message);
//    }
}
