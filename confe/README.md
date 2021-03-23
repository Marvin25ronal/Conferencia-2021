sudo systemctl enable docker
systemctl start docker
sudo docker login
docker build -t marvin25/pruebaconferencia2021 .
docker push image