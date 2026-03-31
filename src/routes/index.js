const { Router } = require('express');
const productRouter = require('./productRouter.js');

const router = Router();

router.use('/product', productRouter);
router.use('/', (req, res) => {res.send('Hola soy el back!')});

module.exports = router;