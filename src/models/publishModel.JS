const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');



const publishSchema = new mongoose.Schema( {
    Published : String,
    publish_id: String,
    headQuarte: String,

}, { timestamps: true });
    
module.exports = mongoose.model('newPublish', publishSchema)
