const express = require('express');
const {
    getAllBlog,
    createBlog,
    updateBlog,
    deleteBlog
} = require('../controller/blog.controller');

const router = express.Router();

router.get('/', getAllBlog)
router.post('/', createBlog);
router.patch('/', updateBlog);
router.delete('/', deleteBlog);


module.exports = router;