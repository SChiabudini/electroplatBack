const productRouter = require('express').Router();
const { getAllProducts, postProduct, getAllProductCategories } = require('../handlers/product/index.js');

productRouter.get('/', getAllProducts);

productRouter.post('/', postProduct);

productRouter.get('/categories', getAllProductCategories);

module.exports = productRouter;