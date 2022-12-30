const express = require('express');
const cors = require('cors');
const app = express();
require('./config/db');

//IMPORT ROUTER
const userRoute = require('./routes/user.route');
const serviceRoute = require('./routes/service.route');
const blogRoute = require('./routes/blog.route');
const productRouter = require('./routes/product.route');
const reviewRouter = require('./routes/review.route');
const orderRouter = require('./routes/order.route');



//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


//ROUTE ASSIGN
app.use('/api/user', userRoute);
app.use('/api/service', serviceRoute);
app.use('/api/blog', blogRoute);
app.use('/api/product', productRouter);
app.use('/api/review', reviewRouter);
app.use('/api/order', orderRouter);



//handling route error
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Route not found'
    })
});



//handling server error
app.use((err, req, res, next) => {
    res.status(500).json({
        message: 'Something broke'
    });
});


module.exports = app;