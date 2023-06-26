-- this file will contain the SQL needed to create the database schema

CREATE TABLE Users(
    id INT,
    password VARCHAR(20) NOT NULL,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    email VARCHAR(20) NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 0),
    -- position returns position of first occurence of substring, if it is not found it returns 0
    location VARCHAR(20) NOT NULL,
    date TIMESTAMP NOT NULL

);