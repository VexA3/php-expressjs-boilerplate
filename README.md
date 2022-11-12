# Installation
After pulling the Repo `cd` into your directory

run `docker build -t give-it-a-name .`

Make sure you have the `.` its very important

once its built and everything is ready

run `docker-compose up`

Boom, now you have a docker container running a PHP front end and an Express JS micro service side by side.

The front end runs on `localhost`

The Express JS backend runs on `localhost:9000`

## TODO List

- [ ] Setup ENV variables
- [ ] Setup logic in JS and PHP to acquire those ENV variables
- [ ] simplify setup for production deployment
- [ ] Setup Login service Prod vs Dev Dockerfiles