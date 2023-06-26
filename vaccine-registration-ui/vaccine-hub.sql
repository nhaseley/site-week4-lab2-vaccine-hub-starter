-- this file will contain the SQL needd to create the database


-- drop the vaccine_hub database
DROP DATABASE vaccine_hub;

-- create a fresh vaccine_hub database
CREATE DATABASE vaccine_hub;

-- connect to the vaccine_hub database
USE vaccine_hub;

-- run the vaccine-hub-schema.sql script
:r vaccine-hub-schema.sql;