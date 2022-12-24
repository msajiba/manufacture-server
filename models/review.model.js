const mongoose = require('mongoose');
const reviewModel = new mongoose.Schema({
    ratting: {
        type: String,
        require: true,
    },
    des: {
        type: String,
        require: true,
    },
    createOn: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('review', reviewModel);