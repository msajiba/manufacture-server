const express = require('express');
const {
    getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controller/product.controller');

const router = express.Router();


router.get('/', getAllProduct);
router.post('/', createProduct);
router.patch('/', updateProduct);
router.delete('/', deleteProduct);

module.exports = router;