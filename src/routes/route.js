const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const bookController= require("../controllers/bookControllers")
const bookUserModel=require("../models/bookUserModel")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)
//assignment

router.post('/createNewBook',bookController.createBook)
router.get('/getAllBook',bookController.getList)

module.exports = router;
