require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('rescue');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/ping', (_req, res) => res.status(200).json({ message: 'pong!' }));

app.route('/movies')
  .post()
  .get()
  .put()
  .delete();

app.route('/movies/:id')
  .post()
  .get()
  .put()
  .delete();

app.use();

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${3000}`);
});
