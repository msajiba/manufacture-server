const productModel = require("../models/product.model");

const getAllProduct = async (req, res) => {
    try {
        const products = await productModel.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(403).send(error.message);
    }
};


const getSingleProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await productModel.findById({
            _id: id
        });
        res.status(200).send(product);

    } catch (error) {
        res.status(404).send(error.message);
    }
};


const createProduct = async (req, res) => {
    try {
        const product = req.body;
        const filter = {
            name: product.name
        };
        const existProduct = await productModel.findOne(filter);

        if (existProduct) {
            return res.json({
                status: false,
                message: 'Product already exist'
            });
        } else {
            const newProduct = new productModel(product);
            await newProduct.save();
            res.status(201).send({
                message: 'Create successful product',
                status: true,
            });
        }
    } catch (error) {
        res.status(404).send(error.message);
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
    getSingleProduct
};