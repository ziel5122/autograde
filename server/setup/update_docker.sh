echo "creating Docker image"

docker build -t "autograde" - < Dockerfile

echo "retrieving installed Docker images"

docker images
