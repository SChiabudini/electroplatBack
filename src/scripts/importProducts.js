const path = require('path');
const XLSX = require('xlsx');
const mongoose = require('mongoose');

const db = require('../db.js');
const postProduct = require('../controllers/product/post/postProduct.js');
const validateProduct = require('../utils/productValidator.js');

const filePath = path.join(__dirname, '../../imports/products.xlsx');

const workbook = XLSX.readFile(filePath);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const products = XLSX.utils.sheet_to_json(sheet);

const importProducts = async () => {
    try {
        await db();

        for (const [index, product] of products.entries()) {
            try {
                if (typeof product.images === 'string') {
                    product.images = product.images.split(';').map(image => image.trim()).filter(Boolean);
                }

                validateProduct(product);

                await postProduct(
                    product.name,
                    product.description,
                    product.brand,
                    product.category,
                    product.subcategory || null,
                    product.price,
                    product.salePrice ?? 0,
                    product.images,
                    product.shipping
                );

                console.log(`Producto ${index + 2} importado: ${product.name}`);

            } catch (error) {
                console.error(`Error en fila ${index + 2}: ${error.message}`);
            }
        }

    } catch (error) {
        console.error('Error durante la importación:', error.message);
    } finally {
        await mongoose.connection.close();
    }
};

importProducts();