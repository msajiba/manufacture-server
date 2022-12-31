const express = require('express');
const {
    getAllBlog,
    createBlog,
    updateBlog,
    deleteBlog,
    getSingleBlog
} = require('../controller/blog.controller');

const router = express.Router();

router.get('/', getAllBlog)
router.get('/:id', getSingleBlog);
router.post('/', createBlog);
router.patch('/:id', updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;