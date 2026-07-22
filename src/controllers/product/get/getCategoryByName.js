const ProductCategory = require('../../../models/ProductCategory.js');

module.exports = (name) => ProductCategory.findOne({ name });