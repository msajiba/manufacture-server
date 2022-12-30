const express = require('express');
const {
    getAllOrder,
    createOrder,
    deleteOrder
} = require('../controller/order.controller');
const router = express.Router();

router.get('/', getAllOrder);
router.post('/', createOrder);
router.delete('/:id', deleteOrder);

module.exports = router;