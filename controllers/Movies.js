const MoviesService = require("../services/Movies");

const add = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const addedMovieId = await MoviesService.add({
    title,
    directedBy,
    releaseYear,
  });

  return res
    .status(201)
    .json({ id: addedMovieId, title, directedBy, releaseYear });
};

const getAll = async (_req, res) => {
  const movies = await MoviesService.getAll();

  return res.status(200).json(movies);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const movie = await MoviesService.getById(id);

  return res.status(200).json(movie);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, directedBy, releaseYear } = req.body;

  await MoviesService.update({ id, title, directedBy, releaseYear });

  return res.status(200).json({ id, title, directedBy, releaseYear });
};

const exclude = async (req, res) => {
  const { id } = req.params;

  await MoviesService.exclude(id);

  return res.status(204).end();
};

module.exports = {
  add,
  getAll,
  getById,
  update,
  exclude,
};
