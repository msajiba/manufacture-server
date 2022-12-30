const mongoose = require('mongoose');

const orderModel = new mongoose.Schema({
    image: {
        type: Object,
        // required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        // required: true
    },
    createOn: {
        type: Date,
        default: Date.now(),
    },
})

module.exports = mongoose.model('orders', orderModel);