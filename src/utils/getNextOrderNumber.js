const OrderCounter = require('./orderCounter.js');

async function getNextOrderNumber() {
    const orderCounter = await OrderCounter.findOneAndUpdate(
        { name:  'number'},
        { $inc: { value: 1 } },
        { new: true, upsert: true }
    );

    return orderCounter.value.toString().padStart(7, '0');
};

module.exports = getNextOrderNumber;