const { expect } = require('chai');
const sinon = require('sinon');

const MoviesService = require('../../services/Movies');
const MoviesModel = require('../../models/Movies');

describe('O método "create" de MoviesService', () => {
  describe('quando os dados do filme são válidos', () => {
    it('retorna um objeto com o id do filme', () => {

    });
  });

  describe('quando os dados do filme passados como parâmetros são inválidos', () => {
    ['title', 'directedBy', 'releaseYear'].forEach((paramsName) => {
      describe(`"${paramsName} indefinido"`, () => {
        it(`retorna um objeto com a mensagem: "${paramsName}" é um dado obrigatório`, () => {

        });
      });
    });
  
    describe('"title" tem mais que 100 caracteres', () => {
      it('retorna um objeto com a mensagem: "title" não pode ter mais que 100 caracteres', () => {

      });
    });

    describe('"directedBy" tem mais que 50 caracteres', () => {
      it('retorna um objeto com a mensagem: "directedBy" não pode ter mais que 50 caracteres', () => {

      });
    });

    describe('"releaseYear" não é um número inteiro de 4 dígitos', () => {
      it('retorna um objeto com a mensagem: "releaseYear" deve ser um número inteiro de 4 dígitos', () => {

      });
    });
  });
});