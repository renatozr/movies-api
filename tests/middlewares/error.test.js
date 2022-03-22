const { expect } = require('chai');
const sinon = require('sinon');

const error = require('../../middlewares/error');

describe('error middleware', () => {
  const err = { message: 'Mensagem de erro' };
  const req = {};
  const res = {};
  const next = () => {};

  before(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });
  
  it('responde status 500 com a mensagem de erro', () => {
    error(err, req, res, next);

    expect(res.status.calledWith(500)).to.be.true;
    expect(res.json.calledWithMatch({ message: err.message })).to.be.true;
  });
});
