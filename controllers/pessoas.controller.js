const Pessoa = require('../models/Pessoa.model');

const list = async (req, res, next) => {
  try {
    const pessoas = await Pessoa.find();

    if (pessoas.length > 0) {
      res.locals.message = 'Pessoas found';
    } else {
      res.locals.status = 404;
      res.locals.message = 'Pessoas Not found';
    }

    res.locals.data = pessoas;
    return next();
  } catch (err) {
    return next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const {
      name,
      cpf,
      age,
    } = req.body;

    const pessoa = await Pessoa.create({
      name,
      cpf,
      age,
    });

    res.locals.message = 'Pessoa created succesfully';
    res.locals.data = pessoa;

    return next();
  } catch (err) {
    return next(err);
  }
};

const detail = async (req, res, next) => {
  try {
    const {
      pessoaId,
    } = req.params;

    const pessoa = await Pessoa.findById(pessoaId);

    if (pessoa === null) {
      res.locals.status = 404;
      return next('Pessoa not found');
    }

    res.locals.message = 'Pessoa found';
    res.locals.data = pessoa;
    return next();
  } catch (err) {
    return next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const {
      pessoaId,
    } = req.params;

    const pessoa = await Pessoa.findByIdAndUpdate(pessoaId, req.body);

    if (pessoa === null) {
      res.locals.status = 404;
      return next('Pessoa not found');
    }

    res.locals.message = 'Pessoa updated successfully';
    res.locals.data = pessoa;
    return next();
  } catch (err) {
    return next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const {
      pessoaId,
    } = req.params;

    const pessoa = Pessoa.findById(pessoaId);

    if (pessoa === null) {
      res.locals.status = 404;
      return next('Pessoa not found');
    }

    await Pessoa.findByIdAndDelete(pessoaId);

    res.locals.message = 'Pessoa deleted successfully';
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  list,
  create,
  detail,
  update,
  remove,
};
