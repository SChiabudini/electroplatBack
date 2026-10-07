require('../../../db.js');
const ProductSubcategory = require('../../../models/product/ProductSubcategory.js');

const getAllProductSubcategoriesCtrl = async () => {

    const allProductCategories = await ProductSubcategory.find().populate('category');
    return allProductCategories.reverse();
};

module.exports = getAllProductSubcategoriesCtrl;