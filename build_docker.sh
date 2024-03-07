#!/bin/bash

./init_npm.sh
docker build -t mshnwq-website:temp .
docker-compose up