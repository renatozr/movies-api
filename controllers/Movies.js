const MoviesService = require('../services/Movies');

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const {
    message,
    movieId
  } = await MoviesService.create(title, directedBy, releaseYear);

  if (message) return res.status(400).json({ message });

  res.status(201).json({ id: movieId, title, directedBy, releaseYear });
};

const getAll = async (_req, res) => {
  const movies = await MoviesService.getAll();

  res.status(200).json(movies);
}

module.exports = {
  create,
  getAll,
};
