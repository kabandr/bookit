# Bookit

A Travel Booking Application built with React on Express server and deployed using Docker, Docker Compose and Kubernetes.

## Warning

This is a work in progress and some packages may be due an upgrade.

Clone the repository
```
git clone https://github.com/kabandr/bookit.git
```

## Mongo DB

- You need an instance of Mongo database. Mongo Atlas Free Tier is a good start.
- You can also run one in Docker. A Docker Compose file running all the services in one go is provided. You need Docker and Docker Compose installed on your machine.

## Running server application

```
cd backend && npm install && npm start
```
## Running client application

```
cd frontend && npm install && npm start
```

## Running in Docker

- You need Docker and Docker Compose installed on your machine.

In root folder of the repository:

```
docker compose up -d or 
docker-compose up -d (if you use an older version of Docker Compose)
```

## Deploying to Kubernetes Cluster

To come soon...
