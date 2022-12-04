const mongoose = require('mongoose');
const serviceModel = mongoose.Schema({

    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    createOn: {
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model('service', serviceModel);