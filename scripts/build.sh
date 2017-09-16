#!/bin/bash

CONFIG_DIR="../config"
DIST_DIR="../dist"
SERVER_DIR="../server"

# remove previous zip
rm ../autograde.zip

# clean up old build
rm -rf $DIST_DIR/* $DIST_DIR/.ebextensions $DIST_DIR/.env

# build client code for productions and outputs bundles to dist/static
npm run build:client

# custom options for elastic beanstalk
cp -r $CONFIG_DIR/.ebextensions $DIST_DIR

# Dockerfile to create image for student code
cp $CONFIG_DIR/Dockerfile $DIST_DIR

# index.html file to be returned by express
mkdir $DIST_DIR/public
cp ../public/index.html $DIST_DIR/public/index.html

# backend code (es5) [not bundled]
mkdir $DIST_DIR/server
cp -r $SERVER_DIR/src $DIST_DIR/server/src

# package.json for server dependencies
# server code cannot be bundled, so server dependencies have to be installed
  # upon deployment
cp $SERVER_DIR/package.json $DIST_DIR

# copy grading scripts to deployment
mkdir $DIST_DIR/code
cp -r ../code/current $DIST_DIR/code

# file to configure enviroment variables for the app
cp ../.env $DIST_DIR

# zip dist folder contents to deploy to elastic beanstalk
cd $DIST_DIR
zip -r ../autograde.zip * .ebextensions .env
