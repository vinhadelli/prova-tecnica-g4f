docker stop backend-adonis
docker rm backend-adonis
docker build -t backend-adonis .
docker run -it -p 3333:3333 --name backend-adonis backend-adonis