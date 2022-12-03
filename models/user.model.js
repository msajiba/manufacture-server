const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    role: {
        type: String
    },
    createdOn: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('user', userSchema)