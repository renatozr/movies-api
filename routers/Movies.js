const express = require("express");
const rescue = require("express-rescue");
const MoviesController = require("../controllers/Movies");
const MoviesMiddleware = require("../middlewares/Movies");
const methodNotAllowed = require("../middlewares/methodNotAllowed");

const router = express.Router();

router
  .route("/")
  .post([MoviesMiddleware.validateInputMovie, rescue(MoviesController.add)])
  .get(rescue(MoviesController.getAll))
  .put(methodNotAllowed)
  .delete(methodNotAllowed);

router
  .route("/:id")
  .post(methodNotAllowed)
  .get([
    rescue(MoviesMiddleware.validateMovieExistence),
    rescue(MoviesController.getById),
  ])
  .put([
    rescue(MoviesMiddleware.validateMovieExistence),
    MoviesMiddleware.validateInputMovie,
    rescue(MoviesController.update),
  ])
  .delete([
    rescue(MoviesMiddleware.validateMovieExistence),
    rescue(MoviesController.exclude),
  ]);

module.exports = router;
