* Build with maven

```
On windows
$ ./mvnw clean package -DskipTests=true

On linux 

$ mvn clean package -DskipTests=true
```

* Run with docker compose:

```
$ docker-compose up --build
```

if do you want run as detach:

```
$ docker-compose up --build -d
```

