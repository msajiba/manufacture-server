const orderModel = require('../models/order.model');
const paymentModel = require('../models/payment.model');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createPayment = async (req, res) => {

    try {
        const { totalPrice } = req.body;
        const amount = totalPrice * 100;
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "usd",
            payment_method_types: ["card"]
        });
        res.send({ clientSecret: paymentIntent.client_secret })
    } catch (error) {
        res.status(500).send(error.message);
    }
};



const updatePaymentBook = async (req, res) => {

    const id = req.params.id;
    const payment = req.body;

    const existOrder = await orderModel.findById({
        _id: id
    });
    existOrder.paid = true;

    await existOrder.save();

    const newPayment = await paymentModel(payment)
    const result = await newPayment.save()

    res.send({ existOrder, result });

}

module.exports = {
    createPayment,
    updatePaymentBook
};