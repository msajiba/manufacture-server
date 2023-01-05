const serviceModal = require('../models/service.model');

const getAllService = async (req, res) => {
    try {
        const services = await serviceModal.find();
        res.status(200).send(services);
    } catch (error) {
        res.status(403).send(error.message);
    }
};

const getSingleService = async (req, res) => {
    try {
        const id = req.params.id;
        const service = await serviceModal.findById({
            _id: id
        });
        res.status(200).send(service);
    } catch (error) {
        res.status(403).send(error.message);
    }
}

// USER ============

const getAllUserService = async (req, res) => {
    try {
        const services = await serviceModal.find();
        res.status(200).send(services);
    } catch (error) {
        res.status(403).send(error.message);
    }
};

const getSingleUserService = async (req, res) => {
    try {
        const id = req.params.id;
        const service = await serviceModal.findById({
            _id: id
        });
        res.status(200).send(service);
    } catch (error) {
        res.status(403).send(error.message);
    }
}




const createService = async (req, res) => {

    try {
        const service = req.body;
        const filter = {
            name: req.body.name
        };
        const existService = await serviceModal.findOne(filter);

        if (existService) {
            return res.json({
                status: false,
                message: 'Service already exist'
            });
        } else {
            const newService = new serviceModal(service);
            await newService.save();
            res.status(201).send({
                message: 'Create successful service',
                status: true,
            });
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
};


const updateService = async (req, res) => {
    try {
        const id = req.params.id;
        const updateService = req.body;
        const filter = {
            _id: id
        };
        const update = updateService;
        await serviceModal.findOneAndUpdate(filter, update);
        res.status(200).json({
            status: true,
            message: 'Service update success',
        });
    } catch (error) {
        res.status(403).send(error.message);
    }
};


const deleteService = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await serviceModal.deleteOne({
            _id: id
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(403).send(error.message);
    }
};


module.exports = {
    getAllService,
    getSingleService,
    createService,
    updateService,
    deleteService,
    getAllUserService,
    getSingleUserService
};