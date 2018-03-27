#!/bin/bash

logs() {
    docker logs mundorecarga_app_expo -f
}

cd /home/yosmanyga/Work/Projects/intermaple/mundorecarga-app/code

while true
do
    logs

    read -p "Logs?" answer
done
