const mongoose = require('mongoose');
const paymentModel = new mongoose.Schema({
    bookingId: {
        type: String,
        required: true
    },

    transactionId: {
        type: String,
        required: true
    },

    createOn: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('payment', paymentModel)