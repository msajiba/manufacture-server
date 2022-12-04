const mongoose = require('mongoose');
const blogModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    des: {
        type: String,
        required: type,
    },
    createOn: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('blog', blogModel)