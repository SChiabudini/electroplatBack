const { Schema, model } = require('mongoose');

const customerSchema = new Schema({
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
        required: true,
        unique: true
    },

    dni: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        type: String,
        required: true
    },

    address: {
        street: {
            type: String,
            required: true
        },

        number: {
            type: String,
            required: true
        },

        floor: {
            type: String
        },

        unit: {
            type: String
        },

        province: {
            type: String,
            required: true
        },

        city: {
            type: String,
            required: true
        },

        postalCode: {
            type: String,
            required: true
        },

        notes: {
            type: String
        }
    },

    billing: {
        cuit: {
            type: String,
            default: null
        },

        registeredName: {
            type: String,
            default: null
        }
    }
});

module.exports = model('Customer', customerSchema);