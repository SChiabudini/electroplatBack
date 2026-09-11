const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const orderCounterSchema = new Schema ({
    name: { type: String, required: true, unique: true },
    value: { type: Number, default: 0 }
});

const OrderCounter = model('OrderCounter', orderCounterSchema);

module.exports = OrderCounter;