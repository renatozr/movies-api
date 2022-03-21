const MoviesModel = require('../models/Movies');

const validateMovieData = (title, directedBy, releaseYear) => {
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
    case typeof releaseYear !== 'number' || releaseYear.toString().length !== 4:
      return '"releaseYear" deve ser um número inteiro de 4 dígitos';
    default:
      return null;
  }
};

const validateInputMovie = (req, res, next) => {
  const { title, directedBy, releaseYear } = req.body;

  const message = validateMovieData(title, directedBy, releaseYear);

  if (message) return res.status(400).json({ message });

  next();
};

const validateMovieExistence = async (req, res, next) => {
  const { id } = req.params;

  const movie = await MoviesModel.getById(id);

  if (!movie) return res.status(404).json({ message: 'Filme não encontrado' });

  next();
};

module.exports = {
  validateInputMovie,
  validateMovieExistence,
};
