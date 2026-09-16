const ProductBrand = require('../../../models/product/ProductBrand.js');

module.exports = (name) => ProductBrand.findOne({ name });