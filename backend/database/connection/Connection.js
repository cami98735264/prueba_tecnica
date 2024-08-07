
const mongoose = require('mongoose');
const connectToDB = mongoose.connect('mongodb://127.0.0.1:27017/Articles');


// Check if the connection to the database was successful
connectToDB.then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
});

module.exports = connectToDB;