const mongoose = require('mongoose');
const serviceModel = mongoose.Schema({

    image: {
        type: Object,
        // required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    createOn: {
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model('service', serviceModel);