const Example = require('../models/Example');

const list = async (req, res, next) => {
  try {
    res.locals.data = Example.find();
    res.locals.message = 'Examples found';

    return next();
  } catch (err) {
    return next(err);
  }
}

const create = async (req, res, next) => {
  try {
    res.locals.message = 'Example Created';
    res.locals.data = [111];
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  list,
  create,
};