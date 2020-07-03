const { Router } = require('express');

const router = Router();

const pessoasRoutes = require('./pessoas.routes');

router.use('/pessoas', pessoasRoutes);

module.exports = router;
