#!/bin/bash

./init_npm.sh
docker build -t mshnwq-website:temp .

docker tag mshnwq-website:temp mshnwq/mshnwq-website:latest

docker push mshnwq/mshnwq-website:latest
