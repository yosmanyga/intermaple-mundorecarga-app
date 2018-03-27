#!/bin/bash

cd /home/yosmanyga/Work/Projects/intermaple/mundorecarga-app/code

docker-compose \
-f docker/all.yml \
-p mundorecarga_app \
stop
