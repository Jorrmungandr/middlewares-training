module.exports = async (req, res, next) => {
  if (!req.locals) {
    req.locals = {};
  }

  return next();
};
