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

describe('O método "getAll" de MoviesModel', () => {
  describe('quando pega os filmes no banco de dados', () => {
    const moviesPayload = [
      {
        id: 1,
        title: "Um sonho de liberdade",
        directed_by: "Frank Darabont",
        release_year: 1994
      },
      {
        id: 2,
        title: "O Poderoso Chefão",
        directed_by: "Francis Ford Coppola",
        release_year: 1972
      },
      {
        id: 3,
        title: "Batman: O Cavaleiro das Trevas",
        directed_by: "Christopher Nolan",
        release_year: 2008
      }
    ];

    before(() => {
      sinon.stub(connection, 'execute').resolves([moviesPayload]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('retorna um array com os filmes', async () => {
      const response = await MoviesModel.getAll();

      expect(response).to.be.equal(moviesPayload);
    });
  });
});

describe('O método "getById" de MoviesModel', () => {
  describe('quando pega o filme no banco de dados', () => {
    const moviePayload = [{
        id: 1,
        title: "Um sonho de liberdade",
        directed_by: "Frank Darabont",
        release_year: 1994
    }];
    const movieId = 1;

    before(() => {
      sinon.stub(connection, 'execute').resolves([moviePayload]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('retorna o filme', async () => {
      const response = await MoviesModel.getById(movieId);

      expect(response).to.be.equal(moviePayload[0]);
    });
  });

  describe('quando o filme não existe no banco de dados', () => {
    const movieId = 999;

    before(() => {
      sinon.stub(connection, 'execute').resolves([[]]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('retorna o filme', async () => {
      const response = await MoviesModel.getById(movieId);

      expect(response).to.be.equal(null);
    });
  });
});

describe('O método "update" de MoviesModel', () => {
  describe('quando atualiza o filme no banco de dados', () => {
    const moviePayload = [{
        id: 1,
        title: "Um sonho de liberdade",
        directed_by: "Frank Darabont",
        release_year: 1994
    }];
    const movieId = 1;

    before(() => {
      sinon.stub(connection, 'execute').resolves([moviePayload]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('retorna o filme', async () => {
      const response = await MoviesModel.update(movieId);

      expect(response).to.be.equal(moviePayload[0]);
    });
  });
});

describe('O método "exclude" de MoviesModel', () => {
  describe('quando exclui o filme no banco de dados', () => {
    const movieId = 1;

    before(() => {
      sinon.stub(connection, 'execute').resolves();
    });

    after(() => {
      connection.execute.restore();
    });

    it('exclui o filme, sem retornar nada', async () => {
      const response = await MoviesModel.exclude(movieId);

      expect(connection.execute.calledOnce).to.be.equal(true);
      expect(response).to.be.equal(undefined);
    });
  });
});
