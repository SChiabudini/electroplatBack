const productRouter = require('express').Router();
const { getAllProducts } = require('../handlers/product/index.js');

productRouter.get('/', getAllProducts);

module.exports = productRouter;