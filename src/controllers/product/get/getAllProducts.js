require('../../../db.js');
const Product = require('../../../models/Product.js');

const getAllProductsCtrl = async (type) => {

    const allProducts = await Product.find(type ? { type } : {}).populate('brand').populate('category');
    return allProducts.reverse();
};

module.exports = getAllProductsCtrl;