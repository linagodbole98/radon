// 
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        require : true,
        unique : true   
    },
    year:{
        type:Number,
        default:2021
    },
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    tags: [String],
    authorName: String, 
    totalPages: Number,
    stockAvailable: Boolean
}, { timestamps: true });


module.exports = mongoose.model('MyBook', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover