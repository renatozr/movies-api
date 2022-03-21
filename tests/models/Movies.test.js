const { expect } = require('chai');
const sinon = require('sinon');

const MoviesModel = require('../../models/Movies');
const connection = require('../../models/connection');
const {
  moviesPayload,
  serializedMoviesPayload,
  moviePayload,
  serializedMoviePayload,
} = require('../data/Movies');

describe('Movies models', () => {
  before(() => {
    sinon.stub(connection, 'execute');
  });

  after(() => {
    connection.execute.restore();
  });

  describe('add', () => {
    const { id, title, directedBy, releaseYear } = serializedMoviePayload;

    before(() => {
      connection.execute.resolves([{ insertId: id }]);
    });

    after(() => {
      connection.execute.reset();
    });

    it('adiciona novo filme no banco de dados e retorna o id do mesmo', async () => {
      const response = await MoviesModel.add(title, directedBy, releaseYear);

      expect(connection.execute.calledOnce).to.be.true;
      expect(response).to.be.equal(id);
    });
  });

  describe('getAll', () => {
    before(() => {
      connection.execute.resolves([moviesPayload]);
    });

    after(() => {
      connection.execute.reset();
    });

    it('busca todos os filmes no banco de dados e os retorna', async () => {
      const response = await MoviesModel.getAll();

      expect(connection.execute.calledOnce).to.be.true;
      expect(response).to.be.deep.equal(serializedMoviesPayload);
    });
  });

  describe('getById', () => {
    const { id } = moviePayload;
  
    before(() => {
      connection.execute.resolves([[moviePayload]]);
    });

    after(() => {
      connection.execute.reset();
    });

    it('busca o filme pelo id no banco de dados e o retorna', async () => {
      const response = await MoviesModel.getById(id);

      expect(connection.execute.calledOnce).to.be.true;
      expect(response).to.be.deep.equal(serializedMoviePayload);
    });
  });

  describe('update', () => {
    const { id, title, directedBy, releaseYear } = serializedMoviePayload;

    after(() => {
      connection.execute.resetHistory();
    });

    it('atualiza o filme no banco de dados sem retornar nada', async () => {
      const response = await MoviesModel.update(id, title, directedBy, releaseYear);

      expect(connection.execute.calledOnce).to.be.true;
      expect(response).to.be.undefined;
    });
  });

  describe('exclude', () => {
    const { id } = moviePayload;

    after(() => {
      connection.execute.resetHistory();
    });

    it('exclui o filme no banco de dados sem retornar nada', async () => {
      const response = await MoviesModel.exclude(id);

      expect(connection.execute.calledOnce).to.be.true;
      expect(response).to.be.undefined;
    });
  });
});
