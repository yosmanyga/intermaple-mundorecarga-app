# Install

docker run -it --rm -v $(pwd):/app -w /app yosmy/node sh

# Run

docker-compose \
-f docker/all.yml \
-p mundorecarga_app \
stop && \
docker-compose \
-f docker/all.yml \
-p mundorecarga_app \
up -d && \
docker logs mundorecarga_app_expo -f

# Publish

docker exec -it mundorecarga_app sh
exp publish