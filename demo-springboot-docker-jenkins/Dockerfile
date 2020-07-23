FROM java:8
FROM maven:alpine
WORKDIR /app
COPY . /app
RUN mvn -v
RUN mvn clean install -DskipTests
LABEL maintainer=bac93.it@gmail.com
ADD ./target/entropy-backend-0.0.1.jar entropy-backend.jar
ENTRYPOINT ["java","-jar","entropy-backend.jar"]