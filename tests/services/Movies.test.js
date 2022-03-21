// const { expect } = require('chai');
// const sinon = require('sinon');

// const MoviesService = require('../../services/Movies');
// const MoviesModel = require('../../models/Movies');

// describe('O método "create" de MoviesService', () => {
//   const title = 'Matrix';
//   const directedBy = 'Lana Wachowski, Lilly Wachowski';
//   const releaseYear = 1999;

//   describe('quando os dados do filme são válidos', () => {
//     const movieId = 6;

//     before(() => {
//       sinon.stub(MoviesModel, 'create').resolves(movieId);
//     });

//     after(() => {
//       MoviesModel.create.restore();
//     });

//     it('retorna um objeto com o id do filme', async () => {
//       const response = await MoviesService.create(title, directedBy, releaseYear);

//       expect(response.movieId).to.be.equal(movieId);
//     });
//   });

//   describe('quando os dados do filme são inválidos', async () => {
//     ['title', 'directedBy', 'releaseYear'].forEach((paramsName, idx) => {
//       describe(`"${paramsName}" indefinido`, () => {
//         it(`retorna um objeto com a mensagem: "${paramsName}" é um dado obrigatório`, async () => {
//           const response = await MoviesService.create(
//             idx === 0 ? undefined : title,
//             idx === 1 ? undefined : directedBy,
//             idx === 2 ? undefined : releaseYear,
//             );

//           expect(response.message).to.be.equal(`"${paramsName}" é um dado obrigatório`);
//         });
//       });
//     });
  
//     describe('"title" tem mais que 100 caracteres', () => {
//       const unvalidTitle = '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901'

//       it('retorna um objeto com a mensagem: "title" não pode ter mais que 100 caracteres', async () => {
//         const response = await MoviesService.create(unvalidTitle, directedBy, releaseYear);

//         expect(response.message).to.be.equal('"title" não pode ter mais que 100 caracteres');
//       });
//     });

//     describe('"directedBy" tem mais que 50 caracteres', () => {
//       const unvalidDirectedBy = '123456789012345678901234567890123456789012345678901';

//       it('retorna um objeto com a mensagem: "directedBy" não pode ter mais que 50 caracteres', async () => {
//         const response = await MoviesService.create(title, unvalidDirectedBy, releaseYear);

//         expect(response.message).to.be.equal('"directedBy" não pode ter mais que 50 caracteres');
//       });
//     });

//     describe('"releaseYear" não é um número inteiro de 4 dígitos', () => {
//       const unvalidReleaseYear = 123.4;

//       it('retorna um objeto com a mensagem: "releaseYear" deve ser um número inteiro de 4 dígitos', async () => {
//         const response = await MoviesService.create(title, directedBy, unvalidReleaseYear);

//         expect(response.message).to.be.equal('"releaseYear" deve ser um número inteiro de 4 dígitos');
//       });
//     });
//   });
// });