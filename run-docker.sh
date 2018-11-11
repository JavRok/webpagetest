#!/bin/bash
imageName=wpt.org.image
containerName=wpt.org.container

docker build -t $imageName -f Dockerfile  .

echo Delete old container...
docker rm -f $containerName

echo Run new container...
docker run -d -p 4001:80 --name $containerName $imageName
