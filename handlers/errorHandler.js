module.exports = (error, req, res, next) => {
  console.log(error);

  res.locals.message = error.message || error;
  res.locals.status = res.locals.status || 400;
  res.locals.isError = true;

  return next();
};
