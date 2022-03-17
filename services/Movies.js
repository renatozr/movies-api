const MoviesModel = require('../models/Movies');

const create = async (title, directedBy, releaseYear) => {
  const insertId = await MoviesModel.create(title, directedBy, parseInt(releaseYear));

  return insertId;
};

const getAll = async () => {
  const movies = await MoviesModel.getAll();

  return movies;
};

module.exports = {
  create,
  getAll,
};
