const { count } = require("console")
const { default: mongoose } = require("mongoose")
const orderModel = require("../models/orderModel")
const userModel = require("../models/userModel")
const productModel = require("../models/productModel")

// const createorder= async function (req, res) {
//     let order = req.body
//     if(!order.userId) return res.send({msgs:"user id not present"})
    
//     let saveduserData = await userModel.findById(order.userId)
//      if(!saveduserData) return res.send("Invalid user id")

//     // product
    
//   if(!order.productId) return res.send({msgs:"product id not present"})

//      let savedprodData = await productModel.findById(order.productId)
//  if(!savedprodData) return res.send("Invalid product id")
    
//     let orderCreated = await orderModel.create(order)
//     if (req.headers.isfreeappuser==true){
//         await orderModel.updateOne({userId: order.userId},
//             {$set:{amount:0}},{new :true})
//     }
//     else{
//         let pPrice = saveduserData.price
//         if(savedprodData.balance >= pPrice){
//             await userModel.updateOne({_id:order.userId},{$inc:{balance :-pPrice}},{new:true})
//             await orderModel.updateOne({_id:orderCreated._id},{$set:{amount:pPrice}},{new :true})
//                 res.send({msg:orderCreated})
//         }
//         else res.send({msg:"user doesnot have enough balance"})
//     }
  
// // }
//  const orderModel = require('../models/orderModel')
// const userModel = require('../models/userModel')
// const productModel  =require('../models/productsModel')

const createorder = async function(req,res){
    let data = req.body
    let userId = req.body.userId
    let productId = req.body.productId
    let header = req.headers["isfreeappuser"]
    let price = await productModel.find({productId})
    let userValidation  = await userModel.exists({userId})
    let productValidation = await productModel.exists({productId})
    if(userValidation){
        if(productValidation){
            let purchase = await orderModel.create(data)
            if(header == true){
                await userModel.find({_id : userId}).update({balance:   `${balance}-${price}`},{new:true})
            }
            res.send({success : purchase})
        } else{
            res.send({err: "the product is not present"})}
    }else{
        res.send({alert: "you are not a registered user, please register"})}
}



const getorderData= async function (req, res) {
    let orders = await orderModel.find()
    res.send({data: orders})
}

const getAlldetail = async function (req, res) {

    let specificorder = await orderModel.find().populate('userId').populate('productId')
    res.send({data:specificorder})

}

module.exports.getorderData=getorderData
module.exports.createorder=createorder
module.exports.getAlldetail=getAlldetail
