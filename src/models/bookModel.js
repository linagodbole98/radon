const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "newAuthor"
    },
    publish_id:{
        type:ObjectId,
        ref:"newPublish"
    },
    price: Number,
    Rating :Number
 


}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema)
