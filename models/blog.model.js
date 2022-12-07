const mongoose = require('mongoose');
const blogModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: Object,
        // required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createOn: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('blog', blogModel)