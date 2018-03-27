#!/bin/bash

expo() {
    docker exec -it mundorecarga_app_expo bash
}

cd /home/yosmanyga/Work/Projects/intermaple/mundorecarga-app/code

while true
do
    expo

    read -p "Expo?" answer
done
