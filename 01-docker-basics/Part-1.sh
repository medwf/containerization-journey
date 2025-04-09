#! /bin/bash
# search for nginx alpine
docker search nginx:alpine

# pull image
docker pull nginx:alpine

# ckeck downloaded image
docker images

# save in tar file
docker save -o nginx-alpine.tar nginx:alpine

# remove image from images
docker rmi nginx:alpine
docker images

# load image from tar file
docker load -i nginx-alpine.tar
docker images # check it loaded 

# create new tag image
docker tag nginx:alpine medwf/nginx:alpine
docker images # check tag

# push images change medwf to your username dockerhub
docker push medwf/nginx:alpine
