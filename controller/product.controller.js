const productModel = require("../models/product.model");

const getAllProduct = async (req, res) => {
    res.send('Get all product');
};


const createProduct = async (req, res) => {
    try {
        const product = req.body;
        const newProduct = new productModel(product);
        await newProduct.save();
        res.status(201).send({ message: 'product create successfully' });
    } catch (error) {
        res.save(404).send(error.message);
    }
};

const updateProduct = async (req, res) => {
    res.send('update product');
};

const deleteProduct = async (req, res) => {
    res.send('product delete successfully');
};



module.exports = {
    getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};