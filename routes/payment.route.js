const express = require('express');
const { createPayment, updatePaymentBook } = require('../controller/payment.controller');
const verifyJWT = require('../middleware/verifyJWT');
const router = express.Router();


router.post('/create-payment-intent', verifyJWT, createPayment );

router.patch('/booking/:id', verifyJWT, updatePaymentBook );

module.exports = router;