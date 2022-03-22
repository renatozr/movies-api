const { expect } = require('chai');
const sinon = require('sinon');

const methodNotAllowed = require('../../middlewares/methodNotAllowed');

describe('methodNotAllowed middleware', () => {
  const req = {};
  const res = {};

  before(() => {
    res.status = sinon.stub().returns(res);
    res.end = sinon.stub().returns();
  });

  it('responde status 405 sem conteúdo', () => {
    methodNotAllowed(req, res);

    expect(res.status.calledWith(405)).to.be.true;
    expect(res.end.calledOnce).to.be.true;
  });
});
