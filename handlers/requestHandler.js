module.exports = (req, res, next) => {
  try {
    if (!res.locals) {
      res.locals = {};
    }

    return next();
  } catch (err) {
    return next(err);
  }
};