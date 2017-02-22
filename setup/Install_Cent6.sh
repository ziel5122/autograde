#!/bin/bash

# NodeJS Setup requires running script as root (not sudo)

###########################
# Docker SETUP
###########################
rpm -iUvh http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm
yum update -y
yum install -y docker-io
echo "Docker Setup Complete"

############################
# NodeJS Setup
############################
curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
yum -y install nodejs gcc-c++ make
echo "NodeJS Setup Complete"

############################
# Start Docker
############################
chmod 777 ../src/scripts/DockerTimeout.sh
chmod 777 ../src/scripts/wrapper.sh
chmod 777 ../solutions/*/*/*
chmod 777 UpdateDocker.sh

service docker restart
./UpdateDocker.sh
