const ProductCategory = require('../../../models/product/ProductCategory.js');

module.exports = (name) => ProductCategory.findOne({ name });