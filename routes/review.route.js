const express = require('express');
const { getAllReview, createReview, deleteReview } = require('../controller/review.controller');
const router = express.Router();

router.get('/', getAllReview);
router.post('/', createReview);
router.delete('/:id', deleteReview);

module.exports = router;