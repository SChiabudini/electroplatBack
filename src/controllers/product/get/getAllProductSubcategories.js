require('../../../db.js');
const ProductSubcategory = require('../../../models/product/ProductSubcategory.js');

const getAllProductSubcategoriesCtrl = async () => {

    const allProductCategories = await ProductSubcategory.find();
    return allProductCategories.reverse();
};

module.exports = getAllProductSubcategoriesCtrl;