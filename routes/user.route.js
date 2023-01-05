const express = require('express');
const {
    loginUser,
    getAllUser,
    getAdmin,
    deleteUser,
    makeAdmin,
} = require('../controller/user.controller');
const verifyAdmin = require('../middleware/verifyAdmin');
const verifyJWT = require('../middleware/verifyJWT');
const router = express.Router();


router.get('/admin/:email', getAdmin);
router.put('/login/:email', loginUser);

router.get('/', verifyJWT, verifyAdmin, getAllUser);
router.patch('/:id', verifyJWT, verifyAdmin, makeAdmin)
router.delete('/:id', verifyJWT, verifyAdmin, deleteUser);



module.exports = router;