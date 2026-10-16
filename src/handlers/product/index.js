const getAllProducts = require('./get/getAllProducts.js');
const postProduct = require('./post/postProduct.js');
const getAllProductCategories = require('./get/getAllProductCategories.js');
const getAllProductBrands = require('./get/getAllProductBrands.js');

module.exports = {
    getAllProducts,
    postProduct,
    getAllProductCategories,
    getAllProductBrands
}