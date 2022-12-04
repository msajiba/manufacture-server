const productModel = require("../models/product.model");

const getAllProduct = async (req, res) => {
    res.send('Get all product');
};


const createProduct = async (req, res) => {
    res.send('product create successfully');
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