const orderModel = require("../models/orderModel")
const userModel = require("../models/userModel")


const mid1= async function ( req, res, next) {
 
        await userModel.updateMany({}, { $set: { isFreeAppUser: false } },{upsert:true})
        await orderModel.updateMany({}, { $set: { isFreeAppUser: false } },{upsert:true})
        if (!req.headers["isfreeappuser"])
            res.send({ msg: "the request is missing a mandatory header" })
        else
            next()
    }


module.exports.mid1= mid1
