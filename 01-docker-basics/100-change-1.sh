#! /bin/bash
# pull images
docker pull httpd

# disable tomcat or apache from localhost 
# container 1
docker run -it -d --name httpd-1 -p 8081:80 httpd

# install curl on httpd
docker exec -it httpd-1 apt install curl 

# conatiner 2 
docker run -it -d --name httpd-2 -p 8082:80 httpd

# conatiner 3
docker run -it -d --name httpd-3 -p 8083:80 httpd

# remove all running conatiners
docker rm `docker ps -q`

# stats docker containers
docker stats
