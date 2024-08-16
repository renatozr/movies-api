const MoviesModel = require("../models/Movies");

const errorMessage = {
  titleRequired: '"title" is required',
  titleLength: '"title" must not exceed 100 characters',
  directedByRequired: '"directed by" is required',
  directedByLength: '"directed by" must not exceed 50 characters',
  releaseYearRequired: '"release year" is required',
  releaseYearType: '"release year" must be a valid 4-digit number',
  releaseYearRange: '"release year" must be between 1901 and 2155',
};

const validateMovieData = (title, directedBy, releaseYear) => {
  switch (true) {
    case !title:
      return errorMessage.titleRequired;
    case title.length > 100:
      return errorMessage.titleLength;
    case !directedBy:
      return errorMessage.directedByRequired;
    case directedBy.length > 50:
      return errorMessage.directedByLength;
    case !releaseYear:
      return errorMessage.releaseYearRequired;
    case typeof releaseYear !== "number" || releaseYear.toString().length !== 4:
      return errorMessage.releaseYearType;
    case releaseYear < 1901 || releaseYear > 2155:
      return errorMessage.releaseYearRange;
    default:
      return null;
  }
};

const validateInputMovie = (req, res, next) => {
  const { title, directedBy, releaseYear } = req.body;

  const invalidMessage = validateMovieData(title, directedBy, releaseYear);

  if (invalidMessage) return res.status(400).json({ message: invalidMessage });

  return next();
};

const validateMovieExistence = async (req, res, next) => {
  const { id } = req.params;

  const movie = await MoviesModel.getById(id);

  if (!movie) return res.status(404).json({ message: "Movie not found" });

  return next();
};

module.exports = {
  validateInputMovie,
  validateMovieExistence,
  errorMessage,
};
