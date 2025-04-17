# Docker

Here's a well-structured and complete Docker Image Management cheat sheet with improved formatting and additional details:

---

## Docker Image Management Cheat Sheet

### Image Discovery & Acquisition

| Command      | Description                     | Example                         |
| ------------ | ------------------------------- | ------------------------------- |
| **`search`** | Search Docker Hub for images    | `docker search nginx --limit 5` |
| **`pull`**   | Download image to local machine | `docker pull nginx:1.23-alpine` |

### Local Image Management

| Command                   | Description              | Example                                                              |
| ------------------------- | ------------------------ | -------------------------------------------------------------------- |
| **`images` / `image ls`** | List local images        | `docker images --filter "dangling=true"`                             |
| **`rmi` / `image rm`**    | Remove image(s)          | `docker rmi nginx:latest`<br>`docker image prune -a` (remove unused) |
| **`history`**             | Show image layers        | `docker history --no-trunc nginx`                                    |
| **`inspect`**             | Show detailed image info | `docker inspect nginx \| jq '.[].Config.ExposedPorts'`               |

### Image Tagging & Distribution

| Command    | Description             | Example                                 |
| ---------- | ----------------------- | --------------------------------------- |
| **`tag`**  | Create image reference  | `docker tag nginx myrepo/nginx:v1`      |
| **`push`** | Upload to registry      | `docker push myrepo/nginx:v1`           |
| **`save`** | Export to tar archive   | `docker save -o nginx.tar nginx:alpine` |
| **`load`** | Import from tar archive | `docker load -i nginx.tar`              |

### Image Building

| Command         | Description             | Example                                    |
| --------------- | ----------------------- | ------------------------------------------ |
| **`build`**     | Build from Dockerfile   | `docker build -t myapp:v1 .`               |
| **Build Flags** |                         |
| `-t`            | Name and tag image      | `-t myapp:latest -t myapp:1.0`             |
| `-f`            | Specify Dockerfile path | `-f ./dockerfiles/Dockerfile.prod`         |
| `--no-cache`    | Ignore cache            | `docker build --no-cache -t fresh-image .` |
| `--pull`        | Always pull base image  | `docker build --pull -t updated-image .`   |

---

## Pro Tips

### Image Cleanup

```bash
# Remove dangling images (untagged)
docker image prune

# Remove all unused images (not just dangling)
docker image prune -a

# Remove by filter
docker rmi $(docker images -q --filter "dangling=true")
```

### Bulk Operations

```bash
# Pull multiple tags
docker pull nginx:alpine && docker pull nginx:latest

# Save multiple images
docker save -o all_images.tar nginx:alpine redis:latest

# Delete all images
docker rmi -f $(docker images -aq)
```

### Build Context Tricks

```bash
# Build from URL
docker build -t myapp https://github.com/user/repo.git#branch:dir

# Build with build arguments
docker build --build-arg NODE_ENV=production -t myapp .
```

### Registry Management

```bash
# Log in to registry
docker login registry.example.com

# View registry auth
cat ~/.docker/config.json

# Push with different tag
docker tag local-image:latest registry.example.com/repo:v1
docker push registry.example.com/repo:v1
```

---

## Visual Guide to Common Workflows

1. **Standard Build & Push**:

   ```bash
   docker build -t myrepo/myapp:1.0 .
   docker push myrepo/myapp:1.0
   ```

2. **Multi-Architecture Build** (Requires buildx):

   ```bash
   docker buildx build --platform linux/amd64,linux/arm64 -t myapp:multi-arch .
   ```

3. **Image Analysis**:

   ```bash
   # Show image layers
   docker history --format "{{.ID}}\t{{.CreatedBy}}" myimage

   # Check image size breakdown
   docker system df
   ```

## Docker Container Management Cheat Sheet

### Basic Container Operations

| Command      | Description                                           | Example                                                                                                        |
| ------------ | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **`attach`** | Attach local STDIN/STDOUT/STDERR to running container | `docker attach nginxCnt` (Use Ctrl+P, Ctrl+Q to detach)                                                        |
| **`commit`** | Create new image from container changes               | `docker commit nginxCnt nginx-container:v1`                                                                    |
| **`cp`**     | Copy files between container and host                 | `docker cp nginxCnt:/etc/nginx/nginx.conf ./nginx.conf`<br>`docker cp ./config.json nginxCnt:/app/config.json` |
| **`create`** | Create new container without starting it              | `docker create --name my_nginx nginx:alpine`                                                                   |
| **`exec`**   | Run command in running container                      | `docker exec -it nginxCnt bash`                                                                                |
| **`logs`**   | View container logs                                   | `docker logs -f --tail 100 nginxCnt`                                                                           |
| **`run`**    | Create and start new container                        | `docker run -d -p 8080:80 --name nginxCnt nginx:alpine`                                                        |

### Container Inspection

| Command       | Description                  | Example                                                         |
| ------------- | ---------------------------- | --------------------------------------------------------------- |
| **`diff`**    | Inspect filesystem changes   | `docker diff nginxCnt`                                          |
| **`inspect`** | Show detailed container info | `docker inspect nginxCnt \| jq '.[].NetworkSettings.IPAddress'` |
| **`port`**    | Show port mappings           | `docker port nginxCnt 80`                                       |
| **`top`**     | Show running processes       | `docker top nginxCnt`                                           |
| **`stats`**   | Live resource usage          | `docker stats nginxCnt`                                         |

### Lifecycle Management

| Command       | Description                | Example                           |
| ------------- | -------------------------- | --------------------------------- |
| **`start`**   | Start stopped container    | `docker start nginxCnt`           |
| **`stop`**    | Stop running container     | `docker stop nginxCnt`            |
| **`restart`** | Restart container          | `docker restart nginxCnt`         |
| **`pause`**   | Freeze container processes | `docker pause nginxCnt`           |
| **`unpause`** | Unfreeze container         | `docker unpause nginxCnt`         |
| **`kill`**    | Force stop container       | `docker kill -s SIGTERM nginxCnt` |

### Cleanup Operations

| Command     | Description                | Example                                              |
| ----------- | -------------------------- | ---------------------------------------------------- |
| **`rm`**    | Remove container(s)        | `docker rm nginxCnt`<br>`docker rm $(docker ps -aq)` |
| **`prune`** | Cleanup stopped containers | `docker container prune`                             |

### Advanced Operations

| Command      | Description                 | Example                                     |
| ------------ | --------------------------- | ------------------------------------------- |
| **`export`** | Export filesystem as tar    | `docker export nginxCnt > nginx_backup.tar` |
| **`rename`** | Rename container            | `docker rename nginxCnt nginx-web`          |
| **`update`** | Modify container config     | `docker update --memory 512M nginxCnt`      |
| **`wait`**   | Block until container stops | `docker wait nginxCnt`                      |

---

## Pro Tips

1. **Combining Commands**:

   ```bash
   # Remove all stopped containers and unused networks
   docker container prune && docker network prune
   ```

2. **Batch Operations**:

   ```bash
   # Stop all running containers
   docker stop $(docker ps -q)

   # Remove all containers (force)
   docker rm -f $(docker ps -aq)
   ```

3. **Inspect Specific Fields**:

   ```bash
   docker inspect -f '{{.NetworkSettings.IPAddress}}' nginxCnt
   ```

4. **Logs Management**:

   ```bash
   # Show logs with timestamps
   docker logs -t nginxCnt

   # Show last 50 lines and follow
   docker logs --tail 50 -f nginxCnt
   ```
