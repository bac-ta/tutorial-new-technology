FROM java:8
COPY ./target/test-java-0.0.1-SNAPSHOT.jar /usr/src/app/test-java.jar
WORKDIR /usr/src/app
EXPOSE 5592
CMD ["java", "-jar", "test-java.jar"]