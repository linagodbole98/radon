const { count } = require("console")
const productModel = require("../models/productModel")


const createproduct= async function (req, res) {
    
    let product = req.body
    let productCreated = await productModel.create(product)
    res.send({data: productCreated})
}


module.exports.createproduct= createproduct