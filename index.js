require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const MoviesRouter = require("./routers/Movies");
const error = require("./middlewares/error");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/movies", MoviesRouter);

app.use(error);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
