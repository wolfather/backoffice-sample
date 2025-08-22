#!/bin/bash

docker stop backoffice-container 2>/dev/null || true
docker rm backoffice-container 2>/dev/null || true


docker build -t backoffice .
docker run --rm -p 3000:80 --name backoffice-container backoffice