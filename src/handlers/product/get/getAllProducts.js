const getController = require('../../../controllers/product/get/getAllProducts.js');

const getAllProductsHandler = async (req, res) => {

    try {
        const allProducts = await getController();

        res.status(200).send(allProducts);

    } catch (error) {
        res.status(500).send({ error: error.message }); 
    }
};

module.exports = getAllProductsHandler;