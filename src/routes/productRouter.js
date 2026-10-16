const productRouter = require('express').Router();
const { getAllProducts, postProduct, getAllProductCategories, getAllProductBrands } = require('../handlers/product/index.js');

productRouter.get('/', getAllProducts);

productRouter.post('/', postProduct);

productRouter.get('/categories', getAllProductCategories);

productRouter.get('/brands', getAllProductBrands);

module.exports = productRouter;