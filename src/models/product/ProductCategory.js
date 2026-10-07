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
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

productCategorySchema.virtual('subcategories', {
    ref: 'productSubcategory',
    localField: '_id',
    foreignField: 'category'
});

module.exports = model('productCategory', productCategorySchema);