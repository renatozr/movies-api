DROP DATABASE IF EXISTS movies_db;

CREATE DATABASE movies_db;

USE movies_db;

CREATE TABLE movies (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  directed_by VARCHAR(50) NOT NULL,
  release_year YEAR NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO movies
  (title, directed_by, release_year)
VALUES
  ('The Shawshank Redemption', 'Frank Darabont', 1994),
  ('The Godfather', 'Francis Ford Coppola', 1972),
  ('The Dark Knight', 'Christopher Nolan', 2008),
  ('The Lord of the Rings: The Return of the King', 'Peter Jackson', 2003),
  ('Fight Club', 'David Fincher', 1999);
