# DHBW-REST-API-Example

This is an example REST API project built wit Node.js and Express,
part of a distributed systems lecture @ DHBW Karlsruhe.

The service is dockerized; the frontend, the backend and a MongoDB
run inside of containers orchestrated via docker-compose.

The rudimental React frontend application demonstrates a frotend to
backend connection via fetch.

## Run the app 🚀

- frontend: `cd simple-frontend && npm run start`
- backend: `cd simple-backend && npm run start`
- all containers (frontend, backend, mongo): `cd simple-backend && npm run d-up`
