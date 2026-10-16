const getController = require('../../../controllers/product/get/getAllProductBrands');

const getAllProductBrandsHandler = async (req, res) => {

    try {

        const allProductBrands = await getController();

        res.status(200).send(allProductBrands);

    } catch (error) {
        res.status(500).send({ error: error.message }); 
    }
};

module.exports = getAllProductBrandsHandler;