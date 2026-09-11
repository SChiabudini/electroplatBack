const { Schema, model } = require('mongoose');
const getNextOrderNumber = require('../utils/getNextOrderNumber.js');

const orderSchema = new Schema({

    number: {
        type: String,
        unique: true
    },

    status: {
        type: String,
        enum: [
            'pending',
            'confirmed',
            'awaiting_payment',
            'paid',
            'preparing',
            'shipped',
            'ready_for_pickup',
            'completed',
            'cancelled'
        ],
        default: 'pending'
    },

    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },

    customerData: {
        name: {
            type: String,
            required: true
        },

        lastname: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },

        dni: {
            type: String,
            required: true
        },

        phone: {
            type: String,
            required: true
        }
    },

    shippingAddress: {
        street: String,
        number: String,
        floor: String,
        unit: String,
        province: String,
        city: String,
        postalCode: String,
        notes: String
    },

    billingData: {
        cuit: {
            type: String,
            default: null
        },

        registeredName: {
            type: String,
            default: null
        }
    },

    products: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },

        name: {
            type: String,
            required: true
        },

        image: {
            type: String,
            default: null
        },

        quantity: {
            type: Number,
            required: true
        },

        unitPrice: {
            type: Number,
            required: true
        },

        subtotal: {
            type: Number,
            required: true
        }
    }],

    productsTotal: {
        type: Number,
        required: true
    },

    shippingCost: {
        type: Number,
        default: null
    },

    total: {
        type: Number,
        required: true
    },

    shippingType: {
        type: String,
        enum: [
            'local_delivery',
            'carrier',
            'pickup',
            'to_coordinate'
        ],
        required: true
    }

}, {
    timestamps: true
});

// Middleware para generar un número único antes de guardar

orderSchema.pre('save', async function(next) {
    if (!this.number) {
        try {
            this.number = await getNextOrderNumber();
            if (!this.number) {
                throw new Error('Failed to generate number');
            }
        } catch (error) {
            return next(error);
        }
    }
    next();
});

module.exports = model('Order', orderSchema);