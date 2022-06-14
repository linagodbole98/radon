const productModel = require("../models/productModel");
const userModel = require("../models/userModel");
const userBalance = async function(req,res){
if(!req.headers.isfreeappuser){
let userbalance = await userModel.find({balance}).select(_id)
let updatebalance = await 
}
else
{
    let updateprice  = await userModel.updateOne({balance},$set({balance:0}))
}}
