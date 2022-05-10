#!/bin/bash
docker-compose -f "docker-compose.yml"  -p "anclaev-com" down
docker-compose -f "docker-compose.yml" -p "anclaev-com" up -d