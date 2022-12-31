const express = require('express');
const {
    getAllService,
    createService,
    updateService,
    deleteService,
    getSingleService,
} = require('../controller/service.controller');
const router = express.Router();

router.get('/', getAllService);
router.get('/:id', getSingleService);
router.post('/', createService);
router.patch('/:id', updateService);
router.delete('/:id', deleteService);

module.exports = router;