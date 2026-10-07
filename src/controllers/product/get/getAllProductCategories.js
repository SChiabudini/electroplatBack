require('../../../db.js');
const ProductCategory = require('../../../models/product/ProductCategory.js');

const getAllProductCategoriesCtrl = async () => {

    const allProductCategories = await ProductCategory.find().populate('subcategories');
    return allProductCategories.reverse();
};

module.exports = getAllProductCategoriesCtrl;