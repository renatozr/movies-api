const connection = require("./connection");

const serialize = ({ id, title, directed_by, release_year }) => ({
  id,
  title,
  directedBy: directed_by,
  releaseYear: release_year,
});

const add = async ({ title, directedBy, releaseYear }) => {
  const [result] = await connection.execute(
    "INSERT INTO movies (title, directed_by, release_year) VALUES (?, ?, ?);",
    [title, directedBy, releaseYear]
  );

  return result.insertId;
};

const getAll = async () => {
  const [rows] = await connection.execute("SELECT * FROM movies;");

  return rows.map(serialize);
};

const getById = async (id) => {
  const [row] = await connection.execute("SELECT * FROM movies WHERE id = ?;", [
    id,
  ]);

  if (!row[0]) return null;

  return row.map(serialize)[0];
};

const update = async ({ id, title, directedBy, releaseYear }) => {
  await connection.execute(
    "UPDATE movies SET title = ?, directed_by = ?, release_year = ? WHERE id = ?;",
    [title, directedBy, releaseYear, id]
  );
};

const exclude = async (id) => {
  await connection.execute("DELETE FROM movies WHERE id = ?;", [id]);
};

module.exports = {
  add,
  getAll,
  getById,
  update,
  exclude,
};
