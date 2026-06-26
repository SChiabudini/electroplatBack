const ProductBrand = require('../../../models/ProductBrand.js');

const postCtrl = async (name) => {
  
    const brand = {
        name
    }

    const newBrand = await ProductBrand.create(brand);

    return newBrand;
};

module.exports = postCtrl;