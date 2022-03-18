const { expect } = require('chai');
const sinon = require('sinon');

const MoviesModel = require('../../models/Movies');
const connection = require('../../models/connection');

describe('O método "create" de MoviesModel', () => {
  const title = 'Matrix';
  const directedBy = 'Lana Wachowski, Lilly Wachowski';
  const releaseYear = 1999;

  describe('quando cria um novo filme no banco de dados', () => {
    const movieId = 6;

    before(() => {
      sinon.stub(connection, 'execute').resolves([{ insertId: movieId }]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('retorna o id do filme', async () => {
      const response = await MoviesModel.create(title, directedBy, releaseYear);

      expect(response).to.be.equal(movieId);
    });
  });
});
