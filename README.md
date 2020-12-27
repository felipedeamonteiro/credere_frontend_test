# Hiring Test - Credere
This is a frontend aplication to the backend developer job in the company Credere.

## - Specifications and technologies used here

This project was built using `ReactJs` with `Typescript`.

Here, `node` version is `12.16.3` and the package manager used is `yarn` in version `1.22.5`.

The database used is `Postgres` with `Typeorm` as ORM (object-relational mapping). Besides that, the database is running in a `docker` image of postgres.

It's not used tests because the main point of this test is the backend application of this project. The backend repository can be found [here](https://github.com/felipedeamonteiro/credere_backend_test).

## - How to run the project

### Project

After downloading the code from the repository (and letting the docker running), run `yarn` to install all the dependencies.

After that:
```
yarn start
```
The application will be running on port 3000:
```
http://localhost:3000
```

The project is about moving a Mars Probe in a console. It moves always to its front, but the direction may change from `Right` to `Up`, `Down` and `Left`. It runs only in small area like this:

| (0,4) |  (1,4) | (2,4) |  (3,4) | (4,4) |
|:-----:|  ----  |  ---- |  ----  |  ---- |
| (0,3) |  (1,3) | (2,3) |  (3,3) | (4,3) |
| (0,2) |  (1,2) | (2,2) |  (3,2) | (4,2) |
| (0,1) |  (1,1) | (2,1) |  (3,1) | (4,1) |
| (0,0) |  (1,0) | (2,0) |  (3,0) | (4,0) |

These are the real coordinates and they are part of the probe localization. It accepts the written commands `GE (Rotate Left), GD (Rotate Right) and M (Move Front)`.

More instructions may be seen inside the application (everything is in portuguese).

## Enjoy!
