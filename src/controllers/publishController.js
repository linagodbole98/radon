const PublishModel= require("../models/publishModel")

const createPublish= async function (req, res) {
    let publish = req.body
    let publishCreated = await PublishModel.create(publish)
    res.send({data: publishCreated})
}

const getpublishedData= async function (req, res) {
    let published = await PublishModel.find()
    res.send({data: published})
}

module.exports.createPublish= createPublish
module.exports.getpublishedData= getpublishedData