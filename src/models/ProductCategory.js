const { Schema, model } = require('mongoose');

const productCategorySchema = new Schema({
    name: { 
        type: String,
        required: true
    },

    active: {
        type: Boolean,
        default: true
    }
});

module.exports = model('ProductCategory', productCategorySchema);