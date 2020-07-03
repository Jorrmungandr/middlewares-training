module.exports = (error, req, res, next) => {
  res.locals.message = error.message || error;
  res.locals.status = res.locals.status || 400;
  res.locals.isError = true;

  return next();
};
