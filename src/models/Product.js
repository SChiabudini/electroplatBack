const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    brand: { 
        type: Schema.Types.ObjectId,
        ref: 'productBrand',
        default: null
    },

    category: {
        type: Schema.Types.ObjectId,
        ref: 'productCategory',
        default: null
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        default: 0
    },

    active: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Product', productSchema);