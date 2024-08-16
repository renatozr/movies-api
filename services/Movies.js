const MoviesModel = require("../models/Movies");

const add = async ({ title, directedBy, releaseYear }) => {
  const addedMovieId = await MoviesModel.add({
    title,
    directedBy,
    releaseYear,
  });

  return addedMovieId;
};

const getAll = async () => {
  const movies = await MoviesModel.getAll();

  return movies;
};

const getById = async (id) => {
  const movie = await MoviesModel.getById(id);

  return movie;
};

const update = async ({ id, title, directedBy, releaseYear }) => {
  await MoviesModel.update({ id, title, directedBy, releaseYear });
};

const exclude = async (id) => {
  await MoviesModel.exclude(id);
};

module.exports = {
  add,
  getAll,
  getById,
  update,
  exclude,
};
