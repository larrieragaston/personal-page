# To run the react app, first change in package.jon the homepage variable to "/"

build:
    docker build . -t dockerized-react

run:
    docker run -p 3000:3000 -d dockerized-react

# Running with docker-compose

build&run:
    docker-compose up --build

run:
    docker-compose up