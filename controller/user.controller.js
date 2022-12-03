const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const getAllUser = async (req, res) => {
    const users = await userModel.find();
    res.status(200).json({
        message: 'Get all user'
    });
};

const getAdmin = async (req, res) => {
    const email = req.params.email;
    const user = await userModel.findOne({
        email: email
    });

    const isAdmin = user ?.role === 'admin';
    res.status(200).json({
        admin: isAdmin
    });
};

const loginUser = async (req, res) => {

    try {

        const email = req.params.email;
        const user = req.body;
      
        const filter = {email: email};
        const update = {user};

        const result = await userModel.findOneAndUpdate(filter, update, {new: true, upsert: true});
        
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


module.exports = {
    getAllUser,
    loginUser,
    getAdmin,
  
};