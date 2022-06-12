const authorModel = require("../models/authorModel")
const { modelName } = require("../models/bookModel")
const bookModel= require("../models/bookModel")
const publishModel = require("../models/publishModel")

const createBook= async function (req, res) {
    let book = req.body
    if(!book.author_id) return res.send({msgs:"author id not present"})
    
    let savedAuthData = await authorModel.findById(book.author_id)
    if(!savedAuthData) return res.send("Invalid author id")
    
     if(!book.publish_id) return res.send({msgs:"publisher id not present"})

     let savedPubData = await publishModel.findById(book.publish_id)
    if(!savedPubData) return res.send("Invalid publisher id")

    
    
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}


const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

// const updateBooks = async function (req, res) {
//     // update hardcover to true for few books
//     let hardCOverPublishers = await publishModel.find({  Published: { $in: ['Penguin', 'HarperCollins'] } }).select({ _id: 1 })
//     let arrayOfPublishers = []

//     for (let i = 0; i < hardCOverPublishers.length; i++) {
//         let objId = hardCOverPublishers[i]._id
//         arrayOfPublishers.push(objId)
//     }

//     let books = await bookModel.updateMany({ publish: { $in: arrayOfPublishers } }, { isHardCover: true })

//     res.send({ data: books })

// }

// const updatePrice= async function(req,res){
//     let id= req.params.id
//     let updatedPrice= await bookModel.findByIdAndUpdate(id, req.body,{
//         new:true
//     })
//     res.send({msg:updatedPrice})
// }

// const updateBookData= async function(res,req){
    
    
//     let updateBook= await bookModel.find( { publisher:"62a219d02a6954e5b7652f6a"} )
//     // let updateBook2= await BookModel.find( { publisher:"62a232c50e8fcd4d29dc7e2b"} )
//     console.log(updateBook)
//     // console.log(updateBook2)
// }
// ===========================Upadatekey=========================================


const Upadatekey=async function(req,res){
    let data=await publishModel.find({Published :"HarperCollins"}).select("_id")
    let data2=await publishModel.find({Published :"Penguin"}).select("_id")
    let UpdateHardCover=await bookModel.updateMany({publish_id:data},{$set:{isHardCover:true}})
    let UpdateHardCover2=await bookModel.updateMany({publish_id:data2},{$set:{isHardCover:true}})
    res.send({msg:UpdateHardCover,UpdateHardCover2})
}
// ==========================updatebookprice===================================================
const Upadateprice =async function (req, res) {
    let authorRating = await authorModel.find({rating:{$gt:3.5}}).select("_id")
    let updatedprice= await bookModel.updateMany({author_id:rating}, {$inc: {price:+10}})
    res.send({data:updatedprice })

}
// ==================================================================================================

const getBooksWithAuthorDetails = async function (req, res) {

    let specificBook = await bookModel.find().populate('author_id').populate('publish_id')
    res.send({data: specificBook})

}


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.Upadatekey= Upadatekey
module.exports.Upadateprice= Upadateprice

