require('../../../db.js');
const ProductCategory = require('../../../models/ProductCategory.js');

const getAllProductsCategoriesCtrl = async () => {

    const allProductsCategories = await ProductCategory.find();
    return allProductsCategories.reverse();
};

module.exports = getAllProductsCategoriesCtrl;