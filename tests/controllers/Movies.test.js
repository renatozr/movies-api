// const { expect } = require('chai');
// const sinon = require('sinon');

// const MoviesController = require('../../controllers/Movies');
// const MoviesService = require('../../services/Movies');

// describe('O método "create" de MoviesController', () => {
//   const req = {};
//   const res = {};

//   describe('quando cria um novo filme no banco de dados', () => {
//     const moviePayload = {
//       title: 'Matrix',
//       directedBy: 'Lana Wachowski, Lilly Wachowski',
//       releaseYear: 1999,
//     };
//     const movieId = 6;

//     before(() => {
//       req.body = moviePayload;

//       res.status = sinon.stub().returns(res);
//       res.json = sinon.stub().returns();

//       sinon.stub(MoviesService, 'create').resolves({ movieId });
//     });

//     after(() => {
//       MoviesService.create.restore();
//     });

//     it('responde com o status 201', async () => {
//       await MoviesController.create(req, res);

//       expect(res.status.calledWith(201)).to.be.equal(true);
//     });

//     it('retorna os dados do filme criado', () => {
//       const createdMovie = { id: 6, ...moviePayload };

//       expect(res.json.calledWithMatch(createdMovie)).to.be.equal(true);
//     });
//   });

//   describe('quando os dados do filme são inválidos', () => {
//     const message = 'Dados inválidos!';

//     before(() => {
//       req.body = {};

//       res.status = sinon.stub().returns(res);
//       res.json = sinon.stub().returns();

//       sinon.stub(MoviesService, 'create').resolves({ message });
//     });

//     after(() => {
//       MoviesService.create.restore();
//     });

//     it('responde com o status 400', async () => {
//       await MoviesController.create(req, res);

//       expect(res.status.calledWith(400)).to.be.equal(true);
//     });

//     it('retorna a mensagem sobre o dado inválido', () => {
//       const messageObj = { message };

//       expect(res.json.calledWithMatch(messageObj)).to.be.equal(true);
//     });
//   });
// });