FROM java:8
FROM maven:alpine
WORKDIR /app
COPY . /app
RUN mvn -v
RUN mvn clean install -DskipTests
LABEL maintainer=bac93.it@gmail.com
ADD ./target/demo-springboot-docker-jenkins.jar-0.0.1.jar demo-springboot-docker-jenkins.jar
ENTRYPOINT ["java","-jar","demo-springboot-docker-jenkins.jar"]

FROM jenkins/jenkins:2.249
USER root
RUN curl -sSL https://get.docker.com/ | sh
RUN usermod -a -G docker jenkins
USER jenkins
COPY plugins.txt /usr/share/jenkins/ref/plugins.txt
RUN /usr/local/bin/install-plugins.sh < /usr/share/jenkins/ref/plugins.txt
COPY seedJob.xml /usr/share/jenkins/ref/jobs/seed-job/config.xml
ENV JAVA_OPTS -Djenkins.install.runSetupWizard=false