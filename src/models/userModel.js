const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');


const userSchema = new mongoose.Schema( {
    userId:String,
    Name: String,
	balance:{
        type :Number,
        default : 100
    },
     // Default balance at user registration is 100
	address:String,
	age: Number,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] },
	isFreeAppUser:{
        type  : Boolean,
        default : false,
        required:true
    } // Default false value.

}, { timestamps: true });

module.exports = mongoose.model("Users", userSchema) //users

