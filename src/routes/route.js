const express = require('express');
const router = express.Router();
 const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const orderController=require("../controllers/orderController")
const productController= require("../controllers/productController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/getorderData",orderController.getorderData)
router.post("/createorder",commonMW.mid1,orderController.createorder)

//router.post("/mid1",commonMW.mid1, orderController.createorder)
router.post("/createproduct", productController.createproduct  )
router.get("/getAlldetails",orderController.getAlldetail)



router.post("/createUser", UserController.createUser)
router.get("/getuserData",UserController.getUsersData)



//router.get("/basicRoute", commonMW.mid1,  UserController.basicCode)




module.exports = router;