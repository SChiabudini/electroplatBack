const postCtrl = require('../../../controllers/product/post/postProduct.js');

const postHandler = async (req, res) => {
  const { brand, category, description, image, price, type } = req.body;

  try {
    if (!brand || !category || !description || !image || !type) {
      return res.status(400).send({ error: 'Missing Data' });
    }

    if (
        typeof brand !== 'string' ||
        typeof category !== 'string' ||
        typeof description !== 'string' ||
        typeof image !== 'string' ||
        typeof type !== 'string'
    ) {
      return res.status(400).send({ error: 'Incorrect DataType' });
    }

    const newProduct = await postCtrl(brand, category, description, image, price, type);

    res.status(200).send(newProduct);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = postHandler;
