const { expect } = require('chai');
const sinon = require('sinon');

const MoviesController = require('../../controllers/Movies');
const MoviesService = require('../../services/Movies');

describe('Ao requisitar um POST na rota "/movies" o método "create" de MoviesController é chamado', () => {
  const req = {};
  const res = {};
  const moviePayload = {
    title: 'Matrix',
    directedBy: 'Lana Wachowski, Lilly Wachowski',
    releaseYear: 1999,
  };
  const movieId = 6;

  describe('quando cria um novo filme no banco de dados', () => {
    before(() => {
      req.body = moviePayload;

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(MoviesService, 'create').resolves(movieId);
    });

    after(() => {
      MoviesService.create.restore();
    });

    it('retorna ao cliente o status 201 com o json do objeto criado', async () => {
      await MoviesController.create(req, res);

      expect(res.status.calledWith(201)).to.be.equal(true);
      sinon.assert.calledWith(res.json, sinon.match({ id: movieId, ...moviePayload }));
    });
  });

  describe('quando os dados do body são inválidos', () => {
    before(() => {
      req.body = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    
  });
});