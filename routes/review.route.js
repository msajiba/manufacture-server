const express = require('express');
const { getAllReview, createReview, deleteReview } = require('../controller/review.controller');
const verifyAdmin = require('../middleware/verifyAdmin');
const verifyJWT = require('../middleware/verifyJWT');
const router = express.Router();

router.get('/', verifyJWT, verifyAdmin, getAllReview);
router.post('/', createReview);
router.delete('/:id', verifyJWT, verifyAdmin,  deleteReview);

module.exports = router;