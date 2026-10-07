const Product = require('../../../models/product/Product.js');

const getBrandByName = require('./getBrandByName.js');
const getCategoryByName = require('./getCategoryByName.js');
const getSubcategoryByName = require('./getSubcategoryByName.js');

const getAllProductsCtrl = async (
    type,
    brand,
    category,
    subcategory,
    offer,
    sort
) => {
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

    // Solo productos en oferta
    if (offer === 'true') {
        filters.salePrice = { $gt: 0 };
    }

    const pipeline = [
        // Aplicamos los filtros antes de hacer los lookup
        { $match: filters },

        // Marca
        {
            $lookup: {
                from: 'productbrands',
                localField: 'brand',
                foreignField: '_id',
                as: 'brand'
            }
        },
        {
            $unwind: {
                path: '$brand',
                preserveNullAndEmptyArrays: true
            }
        },

        // Categoría
        {
            $lookup: {
                from: 'productcategories',
                localField: 'category',
                foreignField: '_id',
                as: 'category'
            }
        },
        {
            $unwind: {
                path: '$category',
                preserveNullAndEmptyArrays: true
            }
        },

        // Subcategoría
        {
            $lookup: {
                from: 'productsubcategories',
                localField: 'subcategory',
                foreignField: '_id',
                as: 'subcategory'
            }
        },
        {
            $unwind: {
                path: '$subcategory',
                preserveNullAndEmptyArrays: true
            }
        }
    ];

    // Orden
    if (sort === 'price_asc') {
        pipeline.push({ $sort: { price: 1 } });
    } else if (sort === 'price_desc') {
        pipeline.push({ $sort: { price: -1 } });
    } else {
        // Sin orden especificado → marca A-Z
        pipeline.push({
            $sort: {
                'brand.name': 1,
                name: 1
            }
        });
    }

    return Product.aggregate(pipeline);
};

module.exports = getAllProductsCtrl;