const userModel = require("../models/user.model");

const verifyAdmin = async (req, res, next) => {
    const requester = req.decoded.email;
    const requesterAccount = await userModel.findOne({
        email: requester
    });
    if (requesterAccount.role === 'admin') {
        return next();
    } else {
        return res.status(403).json({
            message: 'Forbidden access'
        });
    }
}
module.exports = verifyAdmin;