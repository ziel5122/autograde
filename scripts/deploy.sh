#!/bin/bash

./scripts/update_hw.sh
./scripts/update_docker.sh

node src/server.js
