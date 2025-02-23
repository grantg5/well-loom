# Use the official OpenJDK image as the base image
FROM openjdk:17-jdk-slim

# Using the vscode user in Codespace for easy local debug
RUN chown -R vscode:vscode /app
USER vscode

# Set a working directory in the container
WORKDIR /app

# Copy only the build configuration files first (for dependency caching)
COPY pom.xml .
COPY src ./src

# Install Maven
RUN apt-get install -y maven

# Download dependencies and build the application
RUN mvn -B -f pom.xml dependency:resolve
RUN mvn -B -f pom.xml clean package

# Copy the built JAR file (assumes the output is in target/ directory)
# Make sure the JAR file name matches your Spring application's output
COPY target/spring-app.jar spring-app.jar

# Expose the application port (default for Spring Boot is 8080)
EXPOSE 8080

# Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "spring-app.jar"]
