#! /bin/bash
# Run an Nginx container in detached mode: 
#     - Name the container "web-server"
#     - Map host port 8080 to container port 80
docker run -it -d --name web-server  -p 8080:80 medwf/nginx:alpine

# Verify the container is running
docker ps # should see container is runing 

# Check the container logs
docker logs web-server

# Execute a shell inside the running container and create a test file
docker exec -it web-server sh

# Stop the container
docker stop web-server

# Start the container again
docker start web-server

# Remove the container (must stop it first)
docker stop web-server && docker rm web-server
# or 
docker rm -f web-server 
