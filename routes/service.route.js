const express = require('express');
const {
    getAllService,
    createService,
    updateService,
    deleteService,
    getSingleService,
    getAllUserService,
    getSingleUserService,
} = require('../controller/service.controller');
const verifyAdmin = require('../middleware/verifyAdmin');
const verifyJWT = require('../middleware/verifyJWT');
const router = express.Router();


router.get('/user', getAllUserService);
router.get('/user/:id', getSingleUserService);

router.get('/', verifyJWT, verifyAdmin, getAllService);
router.get('/:id', verifyJWT, verifyAdmin, getSingleService);
router.post('/', verifyJWT, verifyAdmin, createService);
router.patch('/:id', verifyJWT, verifyAdmin, updateService);
router.delete('/:id', verifyJWT, verifyAdmin, deleteService);

module.exports = router;