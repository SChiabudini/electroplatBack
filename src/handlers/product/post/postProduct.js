const postCtrl = require('../../../controllers/product/post/postProduct.js');
const validateProduct = require('../../../utils/productValidator.js');

const postHandler = async (req, res) => {
    try {
        validateProduct(req.body);

        const {
            name, description, brand, category, subcategory,
            price, salePrice, images, shipping
        } = req.body;

        const newProduct = await postCtrl(
            name, description, brand, category, subcategory,
            price, salePrice, images, shipping
        );

        return res.status(200).send(newProduct);

    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
};

module.exports = postHandler;