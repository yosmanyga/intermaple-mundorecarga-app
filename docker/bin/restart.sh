#!/bin/bash

restart() {
    docker-compose -f docker/all.yml -p mundorecarga_app stop && \
    docker-compose -f docker/all.yml -p mundorecarga_app up -d
}

cd /home/yosmanyga/Work/Projects/intermaple/mundorecarga-app/code

while true
do
    restart

    read -p "Reset?" answer
done
