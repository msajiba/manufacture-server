const express = require('express');
const { getAllReview, createReview } = require('../controller/review.controller');
const router = express.Router();

router.get('/', getAllReview);
router.post('/', createReview);

module.exports = router;