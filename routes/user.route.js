const express = require('express');
const {
    loginUser,
    getAllUser,
    getAdmin,
    deleteUser,
} = require('../controller/user.controller');
const verifyJWT = require('../middleware/verifyJWT');
const router = express.Router();

router.get('/', getAllUser);
router.get('/admin/:email', getAdmin);
router.put('/login/:email', loginUser);
router.delete('/:id', deleteUser);



module.exports = router;