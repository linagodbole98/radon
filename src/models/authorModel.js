const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const authorSchema = new mongoose.Schema( {
    author_id:String,
author_name:String,
age:Number,
address:String,
rating:Number

}, { timestamps: true });



module.exports = mongoose.model('newAuthor', authorSchema)
