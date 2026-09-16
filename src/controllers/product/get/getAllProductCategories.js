require('../../../db.js');
const ProductCategory = require('../../../models/ProductCategory.js');

const getAllProductCategoriesCtrl = async () => {

    const allProductCategories = await ProductCategory.find();
    return allProductCategories.reverse();
};

module.exports = getAllProductCategoriesCtrl;