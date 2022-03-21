const { expect } = require('chai');
const sinon = require('sinon');

const MoviesController = require('../../controllers/Movies');
const MoviesService = require('../../services/Movies');
const {
  serializedMoviesPayload,
  serializedMoviePayload,
} = require('../data/Movies');

describe('Movies Controllers', () => {
  const req = {};
  const res = {};

  before(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub();
    res.end = sinon.stub();

    sinon.stub(MoviesService, 'add');
    sinon.stub(MoviesService, 'getAll');
    sinon.stub(MoviesService, 'getById');
    sinon.stub(MoviesService, 'update');
    sinon.stub(MoviesService, 'exclude');
  });

  after(() => {
    MoviesService.add.restore();
    MoviesService.getAll.restore();
    MoviesService.getById.restore();
    MoviesService.update.restore();
    MoviesService.exclude.restore();
  });

  describe('add', () => {
    const { id, title, directedBy, releaseYear } = serializedMoviePayload;

    before(() => {
      req.body = { title, directedBy, releaseYear };

      MoviesService.add.resolves(id);
    });

    after(() => {
      res.status.resetHistory();
      res.json.resetHistory();
    });

    it('responde status 201 com o json do filme adicionado', async () => {
      await MoviesController.add(req, res);

      expect(MoviesService.add.calledOnce).to.be.true;
      expect(MoviesService.add.calledWith(title, directedBy, releaseYear)).to.be.true;
      expect(res.status.calledOnce).to.be.true;
      expect(res.status.calledWith(201)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      expect(res.json.calledWithMatch(serializedMoviePayload)).to.be.true;
    });
  });

  describe('getAll', () => {
    before(() => {
      req.body = undefined;

      MoviesService.getAll.resolves(serializedMoviesPayload);
    });

    after(() => {
      res.status.resetHistory();
      res.json.resetHistory();
    });

    it('responde status 200 com o json dos filmes', async () => {
      await MoviesController.getAll(req, res);

      expect(MoviesService.getAll.calledOnce).to.be.true;
      expect(res.status.calledOnce).to.be.true;
      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      expect(res.json.calledWith(serializedMoviesPayload)).to.be.true;
    });
  });

  describe('getById', () => {
    const { id } = serializedMoviePayload;
  
    before(() => {
      req.params = { id };

      MoviesService.getById.resolves(serializedMoviePayload);
    });

    after(() => {
      res.status.resetHistory();
      res.json.resetHistory();
    });

    it('responde status 200 com o json do filme buscado', async () => {
      await MoviesController.getById(req, res);

      expect(MoviesService.getById.calledOnce).to.be.true;
      expect(MoviesService.getById.calledWith(id)).to.be.true;
      expect(res.status.calledOnce).to.be.true;
      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      expect(res.json.calledWith(serializedMoviePayload)).to.be.true;
    });
  });

  describe('update', () => {
    const { id, title, directedBy, releaseYear } = serializedMoviePayload;

    before(() => {
      req.params = { id };
      req.body = { title, directedBy, releaseYear };
    });

    after(() => {
      res.status.resetHistory();
      res.json.resetHistory();
    });

    it('responde status 200 com o json do filme atualizado', async () => {
      await MoviesController.update(req, res);

      expect(MoviesService.update.calledOnce).to.be.true;
      expect(MoviesService.update.calledWith(id, title, directedBy, releaseYear)).to.be.true;
      expect(res.status.calledOnce).to.be.true;
      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      expect(res.json.calledWithMatch(serializedMoviePayload)).to.be.true;
    });
  });

  describe('exclude', () => {
    const { id } = serializedMoviePayload;

    before(() => {
      req.params = { id };
      req.body = undefined;
    });

    after(() => {
      res.status.resetHistory();
      res.end.resetHistory();
    });

    it('responde status 204 sem conteúdo', async () => {
      await MoviesController.exclude(req, res);

      expect(MoviesService.exclude.calledOnce).to.be.true;
      expect(MoviesService.exclude.calledWith(id)).to.be.true;
      expect(res.status.calledOnce).to.be.true;
      expect(res.status.calledWith(204)).to.be.true;
      expect(res.end.calledOnce).to.be.true;
    });
  });
});
