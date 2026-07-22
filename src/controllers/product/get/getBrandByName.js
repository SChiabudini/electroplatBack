const ProductBrand = require('../../../models/ProductBrand.js');

module.exports = (name) => ProductBrand.findOne({ name });