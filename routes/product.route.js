const express = require('express');
const {
    getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getSingleProduct
} = require('../controller/product.controller');

const router = express.Router();


router.get('/', getAllProduct);
router.get('/:id', getSingleProduct);
router.post('/', createProduct);
router.patch('/', updateProduct);
router.delete('/', deleteProduct);

module.exports = router;