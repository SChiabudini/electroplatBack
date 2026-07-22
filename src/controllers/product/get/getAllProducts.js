
const Product = require('../../../models/Product.js');
const getBrandByName = require('./getBrandByName.js');
const getCategoryByName = require('./getCategoryByName.js');

const getAllProductsCtrl = async (type, brand, category) => {

    const filters = {};

    if (type) filters.type = type;

    if (brand) {
        const brandDoc = await getBrandByName(brand);
        if (!brandDoc) return [];
        filters.brand = brandDoc._id;
    }

    if (category) {
        const categoryDoc = await getCategoryByName(category);
        if (!categoryDoc) return [];
        filters.category = categoryDoc._id;
    }

    return Product.find(filters)
        .populate('brand')
        .populate('category')
        .sort({ _id: -1 });
};

module.exports = getAllProductsCtrl;