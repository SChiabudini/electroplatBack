const ProductCategory = require('../../../models/product/ProductCategory.js');

const postCtrl = async (name) => {
  
    const category = {
        name
    }

    const newCategory = await ProductCategory.create(category);

    return newCategory;
};

module.exports = postCtrl;