const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const getAllUser = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(403).send(error.message);
    }
};

const getAdmin = async (req, res) => {
    const email = req.params.email;
    const user = await userModel.findOne({
        email: email
    });

    const isAdmin = user?.role === 'admin';
    res.status(200).json({
        admin: isAdmin
    });
};

const loginUser = async (req, res) => {

    try {

        const email = req.params.email;
        const user = req.body;

        const filter = {
            email: email
        };
        const update = {
            user
        };

        const result = await userModel.findOneAndUpdate(filter, update, {
            new: true,
            upsert: true
        });

        const token = jwt.sign({
            email
        }, process.env.ACCESS_TOKEN, {
            expiresIn: '2d'
        });

        res.status(201).send({
            accessToken: token,
            user: result
        });
    } catch (error) {
        res.status(401).json({
            message: error.message
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await userModel.deleteOne({
            _id: id
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(403).send(error.message);
    }
};

const makeAdmin = async (req, res) => {

    try {
        const id = req.params.id;
        const user = req.body;
        const filter = {
            _id: id
        };
        
        const existUser = await userModel.findById({
            _id: id
        });
        existUser.role = 'admin';

        await existUser.save();
        
        res.status(200).json({
            status: true,
            message: 'Admin make successful',
        });
    } catch (error) {
        res.status(403).send(error.message);
    }

}


module.exports = {
    getAllUser,
    loginUser,
    getAdmin,
    deleteUser,
    makeAdmin
};