require('../../../db.js');
const ProductBrand = require('../../../models/ProductBrand.js');

const getAllProductsBrandsCtrl = async () => {

    const allProductsBrands = await ProductBrand.find();
    return allProductsBrands.reverse();
};

module.exports = getAllProductsBrandsCtrl;