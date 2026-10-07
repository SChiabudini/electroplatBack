
const Product = require('../../../models/product/Product.js');
const getBrandByName = require('./getBrandByName.js');
const getCategoryByName = require('./getCategoryByName.js');
const getSubcategoryByName = require('./getSubcategoryByName.js');

const getAllProductsCtrl = async (type, brand, category, subcategory) => {

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

    if (subcategory) {
        const subcategoryDoc = await getSubcategoryByName(subcategory);
        if (!subcategoryDoc) return [];
        filters.subcategory = subcategoryDoc._id;
    }

    return Product.find(filters)
        .populate('brand')
        .populate('category')
        .populate('subcategory')
        .sort({ _id: -1 });
};

module.exports = getAllProductsCtrl;