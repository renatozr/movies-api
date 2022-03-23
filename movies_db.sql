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
  ('Um sonho de liberdade', 'Frank Darabont', 1994),
  ('O Poderoso Chefão', 'Francis Ford Coppola', 1972),
  ('Batman: O Cavaleiro das Trevas', 'Christopher Nolan', 2008),
  ('O Senhor dos Anéis: O Retorno do Rei', 'Peter Jackson', 2003),
  ('Clube da Luta', 'David Fincher', 1999);
