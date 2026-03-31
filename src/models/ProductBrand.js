const { Schema, model } = require('mongoose');

const productBrandSchema = new Schema({
    name: { 
        type: String,
        required: true
    },

    active: {
        type: Boolean,
        default: true
    }
});

module.exports = model('ProductBrand', productBrandSchema);