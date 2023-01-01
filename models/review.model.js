const mongoose = require('mongoose');
const reviewModel = new mongoose.Schema({
    ratting: {
        type: Number,
        required: [true, 'Please enter ratting'],
    },
    des: {
        type: String,
        maxLength: [500, "Review Description can't exceed 500 characters"],
        required: true,
    },
    createOn: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('review', reviewModel);