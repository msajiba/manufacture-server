const express = require('express');
const {
    getAllService,
    createService,
    updateService,
    deleteService,
} = require('../controller/service.controller');
const router = express.Router();

router.get('/', getAllService);
router.post('/', createService);
router.patch('/', updateService);
router.delete('/', deleteService);

module.exports = router;