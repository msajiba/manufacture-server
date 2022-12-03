const express = require('express');
const { getAllService, createService } = require('../controller/service.controller');
const router = express.Router();

router.get('/', getAllService)
router.post('/', createService)

module.exports = router;