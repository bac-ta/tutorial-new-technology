* Step 1: Build file jar with maven

```
$ mvn clean package -DskipTests=true
```

* Step 2: Login your google cloud account to get credentials (you can install "gccloud" if have not yet)
```
$ gcloud auth application-default login
```  
* Step 3: Run app IN docker:

```
$ docker-compose up --build
```

##### If do you want run as detach:

```
$ docker-compose up --build -d
```
##### Or if do you want to run app OUT docker:

```
$ java -jar /target/test-java-0.0.1-SNAPSHOT.jar
```