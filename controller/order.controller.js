const orderModel = require("../models/order.model");



const getAllOrder = async (req, res) => {
    try {
        const orders = await orderModel.find();
        res.status(200).send(orders);
    } catch (error) {
        res.status(403).send(error.message);
    }
};

//  ================>USER BASE ORDER SHOW<========== 

const getUserORder = async (req, res) => {
    try {
        const email = req.params.email;
        const filter = {
            email: email
        };
        const order = await orderModel.find(filter);
        res.status(200).send(order);
    } catch (error) {
        res.status(403).send(error.message);
    }
};

const getSingleORder = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await orderModel.findOne({
            _id: id
        });
        res.status(200).send(result);
    } catch (error) {
        res.status(403).send(error.message);
    }
};


const createOrder = async (req, res) => {
    try {
        const order = req.body;
        const newOrder = new orderModel(
            order
        );
        await newOrder.save();
        res.status(201).send('Your order is success');
    } catch (error) {
        res.status(403).send(error.message);
    }
};


// ==============ADMIN============
const deleteOrder = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await orderModel.deleteOne({
            _id: id
        });
        res.status(200).send(result);
    } catch (error) {
        res.status(403).send(error.message);
    }
};

// USER ========================
const deleteUserOrder = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await orderModel.deleteOne({
            _id: id
        });
        res.status(200).send(result);
    } catch (error) {
        res.status(403).send(error.message);
    }
};


module.exports = {
    getAllOrder,
    createOrder,
    deleteOrder,
    getUserORder,
    deleteUserOrder,
    getSingleORder
};