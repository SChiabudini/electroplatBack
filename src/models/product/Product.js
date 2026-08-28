const { Schema, model } = require('mongoose');

const productSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    brand: { 
        type: Schema.Types.ObjectId,
        ref: 'productBrand',
        required: true
    },

    category: {
        type: Schema.Types.ObjectId,
        ref: 'productCategory',
        required: true
    },

    subcategory: {
        type: Schema.Types.ObjectId,
        ref: 'productSubcategory',
        default: null
    },

    price: {
        type: Number,
        required: true
    },

    salePrice: {
        type: Number,
        default: 0
    },

    images: [{
        type: String
    }],

    shipping: {
        type: String,
        enum: ['standard', 'special', 'pickUpOnly'],
        required: true
    },

    active: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Product', productSchema);