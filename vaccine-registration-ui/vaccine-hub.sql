-- this file will contain the SQL needd to create the database
\echo 'Delete and recreate vaccine hub db?'
\prompt 'Return for yes or control-C to cancel > ' answer

-- drop the vaccine_hub database
DROP DATABASE vaccine_hub;

-- create a fresh vaccine_hub database
CREATE DATABASE vaccine_hub;

-- connect to the vaccine_hub database
\connect vaccine_hub;

-- run the vaccine-hub-schema.sql script
\i vaccine-hub-schema.sql;