const postCtrl = require('../../../controllers/product/post/postProduct.js');

const postHandler = async (req, res) => {
  const { name, description, brand, category, subcategory, price, salePrice, images, shipping } = req.body;

  try {
    if (!name || !description || !brand || !category || !price || !images || !shipping) {
      return res.status(400).send({ error: 'Missing Data' });
    }

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
        typeof shipping !== 'string' ||
        !['standard', 'special', 'pickUpOnly'].includes(shipping)
    ) {
      return res.status(400).send({ error: 'Incorrect DataType' });
    }

    const newProduct = await postCtrl(name, description, brand, category, subcategory, price, salePrice, images, shipping);

    res.status(200).send(newProduct);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = postHandler;
