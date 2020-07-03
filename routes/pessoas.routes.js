const { Router } = require('express');

const {
  list,
  create,
  detail,
  update,
  remove,
} = require('../controllers/pessoas.controller');

const router = Router();

router.route('/')
  .get(list)
  .post(create);

router.route('/:pessoaId')
  .get(detail)
  .patch(update)
  .delete(remove)

module.exports = router;
