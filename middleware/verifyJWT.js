const jwt = require("jsonwebtoken");
require('dotenv').config();

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({
            message: 'UnAuthorize access'
        });
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
        if (err) {
            return res.status(403).json({
                message: 'Forbidden access'
            });
        }
        req.decoded = decoded;
        next();
    })
};

module.exports = verifyJWT;