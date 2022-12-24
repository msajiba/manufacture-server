const blogModel = require("../models/blog.model");

const getAllBlog = async (req, res) => {
    const blogs = await blogModel.find();
    res.status(200).json(blogs);
};

const createBlog = async (req, res) => {

    try {
        const blog = req.body;
        const filter = {
            name: req.body.name
        };
        const existBlog = await blogModel.findOne(filter);

        if (existBlog) {
            return res.json({
                status: false,
                message: 'Blog already exist'
            });
        } else {
            const newBlog = new blogModel(blog);
            await newBlog.save();
            res.status(201).send({
                message: 'Create successful blog',
                status: true,
            });
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
};


const updateBlog = async (req, res) => {
    res.send('update product');
};

const deleteBlog = async (req, res) => {
    const id = req.params.id;
    const result = await blogModel.deleteOne({
        _id: id
    });
    res.send(200).json(result);
};

module.exports = {
    getAllBlog,
    createBlog,
    updateBlog,
    deleteBlog,
};