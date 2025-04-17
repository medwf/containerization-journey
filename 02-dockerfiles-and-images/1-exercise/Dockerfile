# download image ubuntu v22.04
FROM ubuntu:22.04

# update and install python3 and pip
RUN apt-get update &&\
  apt-get install -y \
  python3 \
  python3-pip

# create and move to app folder
WORKDIR /app

# copy file app.py on /app/
COPY app.py .

# run the python script
CMD ["python3", "app.py"]
