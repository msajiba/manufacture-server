const express = require('express');
const {
    getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getSingleProduct,
    getAllUserProduct,
    getSingleUserProduct
} = require('../controller/product.controller');
const verifyAdmin = require('../middleware/verifyAdmin');
const verifyJWT = require('../middleware/verifyJWT');

const router = express.Router();


router.get('/user', getAllUserProduct);
router.get('/user/:id', getSingleUserProduct);

router.get('/', verifyJWT, verifyAdmin, getAllProduct);
router.get('/:id', verifyJWT, verifyAdmin, getSingleProduct);
router.post('/', verifyJWT, verifyAdmin, createProduct);
router.patch('/:id', verifyJWT, verifyAdmin, updateProduct);
router.delete('/:id', verifyJWT, verifyAdmin, deleteProduct);

module.exports = router;