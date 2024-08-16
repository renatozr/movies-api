require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const MoviesRouter = require("./routers/Movies");
const errorMiddleware = require("./middlewares/error");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use("/movies", MoviesRouter);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Listening at port: ${PORT}`);
});
