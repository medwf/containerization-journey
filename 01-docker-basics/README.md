# 🐳 Docker Basics

Welcome to Docker! This section will introduce you to the fundamentals of containerization using Docker. You’ll learn how to run containers, explore images, manage the Docker daemon, and execute basic operations using the Docker CLI.

---

## ✅ Learning Objectives

By the end of this section, you will:

- Understand what Docker is and why it's used.
- Be able to run, stop, remove, and inspect containers.
- Pull and explore images from Docker Hub.
- Use Docker CLI confidently for basic tasks.

---

## docker ?

## 🧰 Prerequisites

- Docker installed: [Install Docker](https://docs.docker.com/get-docker/)
- Terminal or command prompt access

---

## 🚀 Basic Tasks

### 1. Run Your First Container

```bash
docker run hello-world
```

✅ _What to Learn:_ This checks if Docker is installed and running correctly.

---

### 2. List Docker Containers

```bash
docker ps        # running containers
docker ps -a     # all containers
```

✅ _What to Learn:_ View containers and their statuses.

---

### 3. Pull an Image from Docker Hub

```bash
docker pull alpine
docker pull ubuntu
```

✅ _What to Learn:_ How Docker images are downloaded and stored locally.

---

### 4. Run a Container in Interactive Mode

```bash
docker run -it ubuntu bash
```

✅ _What to Learn:_ Run and interact with a container shell.

---

### 5. Remove Containers and Images

```bash
docker rm <container_id>
docker rmi <image_id>
```

✅ _What to Learn:_ Clean up unused containers and images.

---

### 6. View System Information

```bash
docker info
docker version
```

✅ _What to Learn:_ Docker engine status and configuration.

---

## 💡 Advanced Tasks

### 1. Create and Run a Named Container

```bash
docker run --name mycontainer ubuntu sleep 60
```

✅ _What to Learn:_ Naming and managing container lifecycle.

---

### 2. Execute Commands in a Running Container

```bash
docker exec -it mycontainer bash
```

✅ _What to Learn:_ Working with live containers.

---

### 3. Inspect Containers

```bash
docker inspect mycontainer
```

✅ _What to Learn:_ View detailed metadata about containers.

---

### 4. Explore Container Logs

```bash
docker logs mycontainer
```

✅ _What to Learn:_ Debugging containers.

---

### 5. Use Detached Mode

```bash
docker run -d --name detached-nginx nginx
```

✅ _What to Learn:_ Running containers in the background.

---

## 📝 Challenges: Images, Containers, and Volumes

## Part 1: Image Operations

1. Search Docker Hub for the official Nginx image
2. Pull the Alpine-based version of Nginx (specific version, not latest)
3. List all images on your system to verify the download
4. Save the Nginx image to a tar file
5. Remove the original Nginx image from your system
6. Load the Nginx image back from the tar file
7. Tag the loaded image with your Docker Hub username
8. [Optional] Push your tagged image to Docker Hub (requires account)

## Part 2: Container Operations

1. Run an Nginx container in detached mode:
   - Name the container "web-server"
   - Map host port 8080 to container port 80
2. Verify the container is running
3. Check the container logs
4. Execute a shell inside the running container and create a test file
5. Stop the container
6. Start the container again
7. Remove the container (must stop it first)

## Part 3: Working with Volumes

1. Create a named volume called "web-data"
2. Run a new Nginx container with:
   - Name "web-app"
   - Port mapping 8081:80
   - Mount the "web-data" volume to "/usr/share/nginx/html"
3. Access the container and create an index.html file in the mounted directory
4. Stop and remove the container
5. Run a new container with the same volume mount and verify your file persists

## Part 4: Creating Custom Images

1. Run a basic Ubuntu container interactively
2. Inside the container:
   - Update packages
   - Install curl
   - Clean up unnecessary files
3. From another terminal, commit this container as a new image called "my-ubuntu"
4. Run a container from your new image and verify curl is installed
5. Create a Dockerfile that reproduces this image (don't use commit)

## Part 5: Cleanup

1. Stop all running containers
2. Remove all containers
3. Remove all images you created
4. Remove unused volumes

---

## 📚 References

- [Docker CLI Reference](https://docs.docker.com/engine/reference/commandline/docker/)
- [Docker Hub](https://hub.docker.com/)
- [Docker Playground](https://labs.play-with-docker.com/)

---

Happy Dockering! 🐳
