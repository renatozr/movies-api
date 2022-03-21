const moviesPayload = [
  {
    id: 1,
    title: 'Um sonho de liberdade',
    directed_by: 'Frank Darabont',
    release_year: 1994
  },
  {
    id: 2,
    title: 'O Poderoso Chefão',
    directed_by: 'Francis Ford Coppola',
    release_year: 1972
  },
  {
    id: 3,
    title: 'Batman: O Cavaleiro das Trevas',
    directed_by: 'Christopher Nolan',
    release_year: 2008
  },
];

const serializedMoviesPayload = [
  {
    id: 1,
    title: 'Um sonho de liberdade',
    directedBy: 'Frank Darabont',
    releaseYear: 1994
  },
  {
    id: 2,
    title: 'O Poderoso Chefão',
    directedBy: 'Francis Ford Coppola',
    releaseYear: 1972
  },
  {
    id: 3,
    title: 'Batman: O Cavaleiro das Trevas',
    directedBy: 'Christopher Nolan',
    releaseYear: 2008
  },
];

const moviePayload = {
  id: 4,
  title: 'Matrix',
  directed_by: 'Lana Wachowski, Lilly Wachowski',
  release_year: 1999,
};

const serializedMoviePayload = {
  id: 4,
  title: 'Matrix',
  directedBy: 'Lana Wachowski, Lilly Wachowski',
  releaseYear: 1999,
};

module.exports = {
  moviesPayload,
  serializedMoviesPayload,
  moviePayload,
  serializedMoviePayload,
};
