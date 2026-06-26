const Product = require('../../../models/Product.js');
const getBrands = require('../get/getAllProductBrands.js');
const postBrand = require('./postProductBrand.js');
const getCategories = require('../get/getAllProductCategories.js');
const postCategory = require('./postProductCategory.js');

const postCtrl = async (brand, category, description, image, price, type) => {
  
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

    const product = {
        brand: existingBrand._id,
        category: existingCategory._id,
        description,
        image,
        price,
        type
    }

    const newProduct = await Product.create(product);

    return newProduct;
};

module.exports = postCtrl;