require('../../../db.js');
const Product = require('../../../models/Product.js');

const getAllProductsCtrl = async () => {

    const allProducts = await Product.find().populate('brand').populate('category');
    return allProducts.reverse();
};

module.exports = getAllProductsCtrl;