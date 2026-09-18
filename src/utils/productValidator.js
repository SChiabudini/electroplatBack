const validateProduct = ({
    name, description, brand, category, subcategory,
    price, salePrice, images, shipping
}) => {

    if (!name || !description || !brand || !category || price == null || !images || !shipping)
        throw new Error('Missing Data');

    if (
        typeof name !== 'string' ||
        typeof description !== 'string' ||
        typeof brand !== 'string' ||
        typeof category !== 'string' ||
        (subcategory != null && typeof subcategory !== 'string') ||
        typeof price !== 'number' ||
        (salePrice != null && typeof salePrice !== 'number') ||
        !Array.isArray(images) ||
        !images.every(image => typeof image === 'string') ||
        !['standard', 'special', 'pickUpOnly'].includes(shipping)
    )
        throw new Error('Incorrect DataType');
};

module.exports = validateProduct;