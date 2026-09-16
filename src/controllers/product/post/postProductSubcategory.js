const ProductSubcategory = require('../../../models/product/ProductSubcategory.js');

const postCtrl = async (name, category) => {
  
    const subcategory = {
        name,
        category
    }

    const newSubcategory = await ProductSubcategory.create(subcategory);

    return newSubcategory;
};

module.exports = postCtrl;