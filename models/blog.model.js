const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    createOn: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('blog', blogSchema)