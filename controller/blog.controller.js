const blogModel = require("../models/blog.model");

const getAllBlog = async (req, res) => {
    try {
        const blogs = await blogModel.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(403).send(error.message);
    }
};



const getSingleBlog = async (req, res) => {
    try {
        const id = req.params.id;
        const blog = await blogModel.findById({
            _id: id
        });
        res.status(200).send(blog);

    } catch (error) {
        res.status(404).send(error.message);
    }
};

//USER ==================

const getAllUserBlog = async (req, res) => {
    try {
        const blogs = await blogModel.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(403).send(error.message);
    }
};

const getSingleUserBlog = async (req, res) => {
    try {
        const id = req.params.id;
        const blog = await blogModel.findById({
            _id: id
        });
        res.status(200).send(blog);

    } catch (error) {
        res.status(404).send(error.message);
    }
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
    const id = req.params.id;
    const updateBlog = req.body;
    const filter = {
        _id: id
    };
    const update = updateBlog;
    await blogModel.findOneAndUpdate(filter, update);
    res.status(200).json({
        status: true,
        message: 'Blog update success',
    });
};

const deleteBlog = async (req, res) => {
    const id = req.params.id;
    const result = await blogModel.deleteOne({
        _id: id
    });
    res.status(200).json(result);
};

module.exports = {
    getAllBlog,
    createBlog,
    updateBlog,
    deleteBlog,
    getSingleBlog,
    getAllUserBlog,
    getSingleUserBlog,
};