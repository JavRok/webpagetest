#!/bin/bash
imageName=wpt.org.image
containerName=wpt.org.container

# TODO: This is only for development
echo Compiling frontend code
npm --prefix ./www run build

docker build -t $imageName -f Dockerfile  .

echo Delete old container...
docker rm -f $containerName

echo Run new container...
docker run -d -p 4001:80 --name $containerName $imageName

echo Container running. Open localhost:4001 on your browser
