// const { expect } = require('chai');
// const sinon = require('sinon');

// const methodNotAllowed = require('../../middlewares/methodNotAllowed');

// describe('O controller "methodNotAllowed"', () => {
//   const req = {};
//   const res = {};

//   before(() => {
//     res.status = sinon.stub().returns(res);
//     res.end = sinon.stub().returns();
//   });

//   it('responde com o status 405', () => {
//     methodNotAllowed(req, res);

//     expect(res.status.calledWith(405)).to.be.equal(true);
//   });

//   it('retorna nenhum conteúdo', () => {
//     expect(res.end.called).to.be.equal(true);
//   });
// });
