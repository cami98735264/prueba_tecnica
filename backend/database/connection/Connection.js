require('dotenv').config();
const { MONGO_URI } = process.env;
const mongoose = require('mongoose');
const connectToDB = mongoose.connect(MONGO_URI);


// Check if the connection to the database was successful
connectToDB.then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
});

module.exports = connectToDB;