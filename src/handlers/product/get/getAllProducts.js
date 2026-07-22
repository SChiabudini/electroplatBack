const getController = require('../../../controllers/product/get/getAllProducts.js');

const getAllProductsHandler = async (req, res) => {

    const { type, brand, category } = req.query;

    try {

        if(
            type && typeof type !== "string" ||
            brand && typeof brand !== "string" ||
            category && typeof category !== "string"
        ){
            return res.status(400).send({ error: 'Incorrect DataType' });
        }

        const allProducts = await getController(type, brand, category);

        res.status(200).send(allProducts);

    } catch (error) {
        res.status(500).send({ error: error.message }); 
    }
};

module.exports = getAllProductsHandler;