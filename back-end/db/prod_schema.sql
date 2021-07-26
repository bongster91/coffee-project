DROP DATABASE IF EXISTS coffees_db;
CREATE DATABASE coffees_db;

\c d3dnhms5chb8uq;

CREATE TABLE coffees (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    price NUMERIC,
    origin TEXT,
    method TEXT,
    url TEXT,
    alt TEXT
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer TEXT,
    content TEXT,
    rating NUMERIC,
    CHECK (rating >= 0 AND rating <= 5),
    coffee_id INTEGER REFERENCES coffees (id)
    ON DELETE CASCADE
);
