const express = require('express');
const {
    getAllOrder,
    createOrder,
    deleteOrder,
    getUserORder,
    getSingleORder
} = require('../controller/order.controller');
const verifyAdmin = require('../middleware/verifyAdmin');
const verifyJWT = require('../middleware/verifyJWT');
const router = express.Router();

router.get('/user/:email', getUserORder);
router.get('/user/:email', getSingleORder);

router.get('/:id', verifyJWT, getSingleORder);

router.post('/', verifyJWT, createOrder);

router.get('/', verifyJWT, verifyAdmin, getAllOrder);
router.delete('/:id', verifyJWT, verifyAdmin, deleteOrder);


module.exports = router;