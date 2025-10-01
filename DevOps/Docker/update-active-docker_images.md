# Update Docker images

To update Docker images, we can use docker cli methods or docker compose methods.

## Pull and run Docker images using Docker CLI

```bash
docker pull <image_name>

# find all running containers
docker ps -a

# find running container id
docker ps -a -q

# stop running container
docker stop <container_id>

# remove running container
docker rm <container_id>

# remove image
docker rmi <image_id>

# start container
docker run --name <container_name> -d <image_name>
```

## Pull and run Docker images using Docker Compose

```bash
# Navigate to the directory containing your docker compose file
cd </path/to/your/compose/file/directory>

# Pull latest version
docker compose pull

# Stop and remove older version
docker compose down

# Start the container
docker compose up -d
```
