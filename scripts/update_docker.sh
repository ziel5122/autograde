#!/bin/bash

echo "creating Docker image"

docker build -t "autograde" - < ../config/Dockerfile

echo "retrieving installed Docker images"

docker images
