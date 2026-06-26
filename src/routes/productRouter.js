const productRouter = require('express').Router();
const { getAllProducts, postProduct } = require('../handlers/product/index.js');

productRouter.get('/', getAllProducts);

productRouter.post('/', postProduct);

module.exports = productRouter;