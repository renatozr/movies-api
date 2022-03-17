require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const MoviesController = require('./controllers/Movies');
const methodNotAllowed = require('./controllers/methodNotAllowed');
// const errorMiddleware = require('./middlewares/error');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/ping', (_req, res) => res.status(200).json({ message: 'pong!' }));

app.route('/movies')
  .post(rescue(MoviesController.create))
  .get(rescue(MoviesController.getAll))
  .put(methodNotAllowed)
  .delete(methodNotAllowed);

app.route('/movies/:id')
  .post(methodNotAllowed)
//   .get(rescue(MoviesController.getById))
//   .put(rescue(MoviesController.update))
//   .delete(rescue(MoviesController.exclude));

// app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${3000}`);
});
