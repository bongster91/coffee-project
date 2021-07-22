DROP DATABASE IF EXISTS coffees_db;
CREATE DATABASE coffees_db;

\c coffees_db;

CREATE TABLE coffees (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    price NUMERIC,
    origin TEXT,
    method TEXT,
<<<<<<< HEAD
    url TEXT
=======
    url TEXT,
    alt TEXT
>>>>>>> b8fd5ee71af64245101ca850ad1f25616b0f48c1
);
