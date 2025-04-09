#! /bin/bash

# Create a named volume called "web-data"
docker volume create web-data
volume ls

#  Run a new Nginx container with:
#     - Name "web-app"
#     - Port mapping 8081:80
#     - Mount the "web-data" volume to "/usr/share/nginx/html"
docker run -it -d --name web-app -p 8081:80 -v web-data:/usr/share/nginx/html medwf/nginx:alpine

# Access the container and create an index.html file in the mounted directory
docker exec -it web-app sh
cd /usr/share/nginx/html
echo "<h1>hello world !</h1>" > index.html
exit

# Stop  remove the container
docker stop web-app
docker rm web-app

# Run a new container with the same volume mount and verify your file persists
docker run -it -d --name web-app -p 8081:80 -v web-data:/usr/share/nginx/html medwf/nginx:alpine

curl http://localhost:8081 :
# output  .. hello world ! ..
