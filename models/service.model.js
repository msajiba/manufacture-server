const mongoose = require('mongoose');
const serviceSchema = mongoose.Schema({ 
    title: {
        type: String, required: true
    },
    price:  {
        type: Number, required: true
    }
});

module.exports = mongoose.model('service', serviceSchema)