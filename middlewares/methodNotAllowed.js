const methodNotAllowed = (_req, res) => res.status(405).end();

module.exports = methodNotAllowed;
