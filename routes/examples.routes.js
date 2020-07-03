const { Router } = require('express');

const {
  list,
  create,
} = require('../controllers/examples.controller');

const router = Router();

router.get('/', list)
router.post('/', create)

module.exports = router;