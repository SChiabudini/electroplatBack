const ProductSubcategory = require('../../../models/product/ProductSubcategory.js');

module.exports = (name) => ProductSubcategory.findOne({ name });