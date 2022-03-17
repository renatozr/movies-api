const { expect } = require('chai');
const sinon = require('sinon');

const methodNotAllowed = require('../../controllers/methodNotAllowed');

describe('Ao requisitar rotas incongruentes o controller "methodNotAllowed" é chamado', () => {
  const req = {};
  const res = {};

  before(() => {
    res.status = sinon.stub().returns(res);
    res.end = sinon.stub().returns();
  });

  it('retorna ao cliente o status 405 sem nenhuma informação', () => {
    methodNotAllowed(req, res);

    expect(res.status.calledWith(405)).to.be.equal(true);
    expect(res.end.calledWith()).to.be.equal(true);
  });
});
