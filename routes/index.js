const { Router } = require('express');

const examples = require('./examples.routes');

const router = Router();

router.use('/example', examples);

module.exports = router;
