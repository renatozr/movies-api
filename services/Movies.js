const MoviesModel = require('../models/Movies');

const validateMovie = (title, directedBy, releaseYear) => {
  switch (true) {
    case !title:
      return '"title" é um dado obrigatório';
    case title.length > 100:
      return '"title" não pode ter mais que 100 caracteres';
    case !directedBy:
      return '"directedBy" é um dado obrigatório';
    case directedBy.length > 50:
      return '"directedBy" não pode ter mais que 50 caracteres';
    case !releaseYear:
      return '"releaseYear" é um dado obrigatório';
    case !/^\d{4}$/.test(releaseYear.toString()):
      return '"releaseYear" deve ser um número inteiro de 4 dígitos';
    default:
      return null;
  }
};

const create = async (title, directedBy, releaseYear) => {
  const message = validateMovie(title, directedBy, releaseYear);

  if (message) return { message };

  const movieId = await MoviesModel.create(title, directedBy, releaseYear);

  return { movieId };
};

const getAll = async () => {
  const movies = await MoviesModel.getAll();

  return movies;
};

module.exports = {
  create,
  getAll,
};
