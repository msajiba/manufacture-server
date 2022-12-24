const reviewModel = require("../models/review.model");

const getAllReview = async (req, res) => {
    try {
        const reviews = await reviewModel.find();
        res.status(200).send(reviews);
    } catch (error) {
        res.status(403).send(error);
    }
};

const createReview = async (req, res) => {
    try {
        const review = req.body;
        const newReview = new reviewModel({
            ratting: review.ratting,
            des: review.des,
        });
        await newReview.save();
        res.status(200).send('Review successful');
    } catch (error) {
        res.status(403).send(error);
    }
};

module.exports = {
    getAllReview,
    createReview
};