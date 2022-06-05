//const { model } = require("mongoose")
const bookuser=require("../models/bookUserModel")

const createBook=async function(req,res){
    const detail=req.body
    const savedData=await bookuser.create(detail)
    res.send({added:savedData})
}

const getList=async function(req,res){
    const list=await bookuser.find()
  res.send({allbooks:list})
}
module.exports.createBook=createBook
module.exports.getList=getList