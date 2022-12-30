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


const deleteReview = async (req, res) => {
    const id = req.params.id;
    const result = await reviewModel.deleteOne({
        _id: id
    });
    res.status(200).send(result);
};


module.exports = {
    getAllReview,
    createReview,
    deleteReview
};