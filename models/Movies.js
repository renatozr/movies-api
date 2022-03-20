const connection = require('./connection');

const create = async (title, directedBy, releaseYear) => {
  const [{ insertId: movieId }] = await connection.execute(
    'INSERT INTO movies (title, directed_by, release_year) VALUES (?, ?, ?);',
    [title, directedBy, releaseYear],
  );

  return movieId;
};

const getAll = async () => {
  const [movies] = await connection.execute('SELECT * FROM movies;');

  return movies;
};

const getById = async (id) => {
  const [movie] = await connection.execute('SELECT * FROM movies WHERE id = ?;', [id]);

  if (!movie[0]) return null;

  return movie[0];
};

const update = async (id, title, directedBy, releaseYear) => {
  const [movie] = await connection.execute(
    'UPDATE movies SET title = ?, directed_by = ?, release_year = ? WHERE id = ?;',
    [title, directedBy, releaseYear, id],
  );

  return movie[0];
};

module.exports = {
  create,
  getAll,
  getById,
  update
};
