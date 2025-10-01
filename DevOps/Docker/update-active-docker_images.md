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
