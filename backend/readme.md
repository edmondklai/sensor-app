
# Docker infomration
Build the image
`docker build -t sensor:latest .`

Run the container
`docker run -p 8080:8080 sensor/latest`

Curl data
`curl localhost:8080/track-points/[id]`