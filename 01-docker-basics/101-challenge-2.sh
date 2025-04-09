#! /bin/bash
# pull images
docker pull httpd
# disable tomcat or apache from localhost 
docker run -it -d --name httpd-1 -p 8080:80 httpd
