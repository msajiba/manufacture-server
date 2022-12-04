const serviceModal = require('../models/service.model');

const getAllService = (req, res) => {
    const service = req.body;
    console.log(service);
    res.status(200).send("get all service ");
};

const createService = async (req, res) => {
    try {
        const service = req.body;
        // const newService = new serviceModal({
        //     title: service.title,
        //     price: service.price
        // });
        // await newService.save();
        res.status(200).send('Create service ')
    } catch (error) {
        console.log(error);
    }
};

const updateService = async (req, res) => {
    res.send('update service');
};

const deleteService = async (req, res) => {
    res.send('delete service');
}




module.exports = {
    getAllService,
    createService,
    updateService,
    deleteService,
};