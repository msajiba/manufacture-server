const express = require('express');
const {
    getAllOrder,
    createOrder,
    deleteOrder,
    getUserORder,
    deleteUserOrder
} = require('../controller/order.controller');
const verifyAdmin = require('../middleware/verifyAdmin');
const verifyJWT = require('../middleware/verifyJWT');
const router = express.Router();

router.get('/user/:email', getUserORder);
router.delete('/user/:id', deleteUserOrder);

router.post('/', verifyJWT, createOrder);

router.get('/', verifyJWT, verifyAdmin, getAllOrder);
router.delete('/:id', verifyJWT, verifyAdmin, deleteOrder);


module.exports = router;