const mongoose = require('mongoose');

const productModel = new mongoose.Schema({

    image: {
        type: String,
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
    stoke: {
        type: Number,
        required: true
    },
    des: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    sku: {
        type: String,
        required: true
    },
    minQuantity: {
        type: Number,
        required: true
    },
    createOn: {
        type: Date,
        default: Date.now(),
    },

});

module.exports = mongoose.model('product', productModel);