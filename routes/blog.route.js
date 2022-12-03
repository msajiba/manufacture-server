const express = require('express');
const { getAllBlog, createBlog } = require('../controller/blog.controller');

const router = express.Router();

router.get('/', getAllBlog)
router.put('/', createBlog);

module.exports = router;