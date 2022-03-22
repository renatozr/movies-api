const MoviesModel = require('../models/Movies');

const messages = {
  titleRequired: '"title" é um dado obrigatório',
  titleLength: '"title" não pode ter mais que 100 caracteres',
  directedByRequired: '"directedBy" é um dado obrigatório',
  directedByLength: '"directedBy" não pode ter mais que 50 caracteres',
  releaseYearRequired: '"releaseYear" é um dado obrigatório',
  releaseYearType: '"releaseYear" deve ser um número inteiro de 4 dígitos',
  releaseYearRange: '"releaseYear" deve estar entre 1901 e 2155'
};

const validateMovieData = (title, directedBy, releaseYear) => {
  switch (true) {
    case !title: messages.titleRequired;
      return ;
    case title.length > 100:
      return messages.titleLength;
    case !directedBy:
      return messages.directedByRequired;
    case directedBy.length > 50:
      return messages.directedByLength;
    case !releaseYear:
      return messages.releaseYearRequired;
    case typeof releaseYear !== 'number' || releaseYear.toString().length !== 4:
      return messages.releaseYearType;
    case releaseYear < 1901 || releaseYear > 2155:
      return messages.releaseYearRange;
    default:
      return null;
  }
};

const validateInputMovie = (req, res, next) => {
  const { title, directedBy, releaseYear } = req.body;

  const invalidMessage = validateMovieData(title, directedBy, releaseYear);

  if (invalidMessage) return res.status(400).json({ message: invalidMessage });

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
  messages,
};
