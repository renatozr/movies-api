const express = require('express');
const rescue = require('express-rescue');

const router = express.Router();

const MoviesController = require('../controllers/Movies');
const MoviesMiddleware = require('../middlewares/Movies');
const methodNotAllowed = require('../middlewares/methodNotAllowed');

router.route('/')
  .post([
    MoviesMiddleware.validateInputMovie,
    rescue(MoviesController.add),
  ])
  .get(rescue(MoviesController.getAll))
  .put(methodNotAllowed)
  .delete(methodNotAllowed);

router.route('/:id')
  .post(methodNotAllowed)
  .get([
    rescue(MoviesMiddleware.validateMovieExistence),
    rescue(MoviesController.getById),
  ])
  .put([
    rescue(MoviesMiddleware.validateMovieExistence),
    MoviesMiddleware.validateInputMovie,
    MoviesController.update,
  ])
  .delete([
    rescue(MoviesMiddleware.validateMovieExistence),
    rescue(MoviesController.exclude),
  ]);

module.exports = router;
