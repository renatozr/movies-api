const { expect } = require('chai');
const sinon = require('sinon');

const MoviesService = require('../../services/Movies');
const MoviesModel = require('../../models/Movies');
const {
  serializedMoviesPayload,
  serializedMoviePayload,
} = require('../data/Movies');

describe('Movies Service', () => {
  before(() => {
    sinon.stub(MoviesModel, 'add');
    sinon.stub(MoviesModel, 'getAll');
    sinon.stub(MoviesModel, 'getById');
    sinon.stub(MoviesModel, 'update');
    sinon.stub(MoviesModel, 'exclude');
  });

  after(() => {
    MoviesModel.add.restore();
    MoviesModel.getAll.restore();
    MoviesModel.getById.restore();
    MoviesModel.update.restore();
    MoviesModel.exclude.restore();
  });

  describe('add', () => {
    const { id, title, directedBy, releaseYear } = serializedMoviePayload;

    before(() => {
      MoviesModel.add.resolves(id);
    });

    it('chama MoviesModel.add e retorna o id do filme adicionado', async () => {
      const response = await MoviesService.add(title, directedBy, releaseYear);

      expect(MoviesModel.add.calledOnce).to.be.true;
      expect(MoviesModel.add.calledWith(title, directedBy, releaseYear)).to.be.true;
      expect(response).to.be.equal(id);
    });
  });

  describe('getAll', () => {
    before(() => {
      MoviesModel.getAll.resolves(serializedMoviesPayload);
    });

    it('chama MoviesModel.getAll e retorna todos os filmes', async () => {
      const response = await MoviesModel.getAll();

      expect(MoviesModel.getAll.calledOnce).to.be.true;
      expect(response).to.be.equal(serializedMoviesPayload);
    });
  });

  describe('getById', () => {
    const { id } = serializedMoviePayload;
  
    before(() => {
      MoviesModel.getById.resolves(serializedMoviePayload);
    });

    it('chama MoviesModel.getById e retorna o filme', async () => {
      const response = await MoviesModel.getById(id);

      expect(MoviesModel.getById.calledOnce).to.be.true;
      expect(MoviesModel.getById.calledWith(id)).to.be.true;
      expect(response).to.be.equal(serializedMoviePayload);
    });
  });

  describe('update', () => {
    const { id, title, directedBy, releaseYear } = serializedMoviePayload;

    it('chama MoviesModel.update sem retornar nada', async () => {
      const response = await MoviesModel.update(id, title, directedBy, releaseYear);

      expect(MoviesModel.update.calledOnce).to.be.true;
      expect(MoviesModel.update.calledWith(id, title, directedBy, releaseYear)).to.be.true;
      expect(response).to.be.undefined;
    });
  });

  describe('exclude', () => {
    const { id } = serializedMoviePayload;

    it('chama MoviesModel.exclude sem retornar nada', async () => {
      const response = await MoviesModel.exclude(id);

      expect(MoviesModel.exclude.calledOnce).to.be.true;
      expect(MoviesModel.exclude.calledWith(id)).to.be.true;
      expect(response).to.be.undefined;
    });
  });
});
