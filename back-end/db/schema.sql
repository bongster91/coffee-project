DROP DATABASE IF EXISTS coffees_db;
CREATE DATABASE coffees_db;

\c coffees_db;

CREATE TABLE coffees (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    price NUMERIC,
    origin TEXT,
    method TEXT,
    url TEXT
);
