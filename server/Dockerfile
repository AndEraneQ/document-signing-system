# ----- Build Stage -----
FROM gradle:8.14-jdk21 AS build
WORKDIR /app
COPY . .
# This will create the JAR file in build/libs/
RUN gradle clean build --no-daemon

# ----- Run Stage -----
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]