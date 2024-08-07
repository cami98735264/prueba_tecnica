const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ArticlesSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    urlToImage: {
        type: String,
        required: true
    },
    publishedAt: {
        type: Date,
        required: true
    }

});
    

module.exports = mongoose.model('Articles', ArticlesSchema);