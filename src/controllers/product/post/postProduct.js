const Product = require('../../../models/Product.js');
const getBrands = require('../get/getAllProductBrands.js');
const postBrand = require('./postProductBrand.js');
const getCategories = require('../get/getAllProductCategories.js');
const postCategory = require('./postProductCategory.js');
const getSubcategories = require('../get/getAllProductSubcategories.js');
const postSubcategory = require('./postProductSubcategory.js');

const postCtrl = async (name, description, brand, category, subcategory, price, salePrice, images, shipping) => {
  
    const brands = await getBrands();
    let existingBrand = brands.find(
        b => b.name.toLowerCase() === brand.toLowerCase()
    );

    if (!existingBrand) {
        existingBrand = await postBrand(brand);
    };

    const categories = await getCategories();
    let existingCategory = categories.find(
        c => c.name.toLowerCase() === category.toLowerCase()
    );

    if (!existingCategory) {
        existingCategory = await postCategory(category);
    };

    let existingSubcategory = null;

    if (subcategory) {
        const subcategories = await getSubcategories();

        existingSubcategory = subcategories.find(
            s => s.name.toLowerCase() === subcategory.toLowerCase() &&
                 s.category.toString() === existingCategory._id.toString()
        );

        if (!existingSubcategory) {
            existingSubcategory = await postSubcategory(
                subcategory,
                existingCategory._id
            );
        }
    }

    const product = {
        name,
        description,
        brand: existingBrand._id,
        category: existingCategory._id,
        subcategory: existingSubcategory._id ?? null,
        price,
        salePrice,
        images,
        shipping
    }

    const newProduct = await Product.create(product);

    return newProduct;
};

module.exports = postCtrl;