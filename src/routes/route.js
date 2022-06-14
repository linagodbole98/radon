const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const commid = require("../middleware/mid1")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", commid.mid,userController.getUserData)

router.put("/users/:userId",commid.mid, userController.updateUser)

router.delete("/users/:userId",commid.mid,userController.deleteuser)

module.exports = router;