#!/bin/bash

npm run build
cp src/server.js heroku
cp index.html heroku
