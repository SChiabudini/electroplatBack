getController = require('../../../controllers/product/get/getAllProductCategories');

const getAllProductCategoriesHandler = async (req, res) => {

    try {

        const allProductCategories = await getController();

        res.status(200).send(allProductCategories);

    } catch (error) {
        res.status(500).send({ error: error.message }); 
    }
};

module.exports = getAllProductCategoriesHandler;