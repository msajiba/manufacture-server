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
    totalPrice: {
        type: Number,
        required: true
    },
    orderQuantity: {
        type: Number,
        required: true
    },
    userName: {
        type: String,
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
    address: {
        type: String,
        required: true,
    },
    paid: {
        type: Boolean,
        default: false,
    },
    createOn: {
        type: Date,
        default: Date.now(),
    },
})

module.exports = mongoose.model('orders', orderModel);