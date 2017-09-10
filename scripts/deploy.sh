#!/bin/bash

sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker

./scripts/update_hw.sh
./scripts/update_docker.sh

node src/server.js
