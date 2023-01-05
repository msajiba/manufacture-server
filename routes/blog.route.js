const express = require('express');
const {
    getAllBlog,
    createBlog,
    updateBlog,
    deleteBlog,
    getSingleBlog,
    getAllUserBlog,
    getSingleUserBlog
} = require('../controller/blog.controller');
const verifyAdmin = require('../middleware/verifyAdmin');
const verifyJWT = require('../middleware/verifyJWT');

const router = express.Router();

router.get('/user', getAllUserBlog);
router.get('/user/:id', getSingleUserBlog);

router.get('/', verifyJWT, verifyAdmin, getAllBlog)
router.get('/:id', verifyJWT, verifyAdmin, getSingleBlog);
router.post('/', verifyJWT, verifyAdmin, createBlog);
router.patch('/:id', verifyJWT, verifyAdmin, updateBlog);
router.delete('/:id', verifyJWT, verifyAdmin, deleteBlog);

module.exports = router;