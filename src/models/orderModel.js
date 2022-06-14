const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( 
    {
        userId:{
            type: ObjectId,
        ref: "Users"
        },
    
        productId:{
            type: ObjectId,
        ref: "product"
        },
        amount: Number,
        isFreeAppUser: String, 
        date: String,
    }, { timestamps: true });
    module.exports = mongoose.model('order', orderSchema)
