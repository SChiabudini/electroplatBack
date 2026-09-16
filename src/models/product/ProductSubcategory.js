const { Schema, model } = require('mongoose');

const productSubcategorySchema = new Schema({
    name: { 
        type: String,
        required: true
    },

    category: {
        type: Schema.Types.ObjectId,
        ref: 'productCategory',
        required: true
    },

    active: {
        type: Boolean,
        default: true
    }
});

module.exports = model('productSubcategory', productSubcategorySchema);