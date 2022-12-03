require("dotenv").config();

const mongoose = require('mongoose');

const db_url = process.env.DB_URL;

mongoose.connect(db_url)
    .then(() => {
        console.log('MONGODB is connect');
    })
    .catch(error => {
        console.log(error);
    })