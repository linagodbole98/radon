const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publishController= require("../controllers/publishController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createpublish",publishController.createPublish)

router.get("/getpublishedData",publishController.getpublishedData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetailsandpub", bookController.getBooksWithAuthorDetails)

router.put("/Updatekey/:id",bookController.Upadatekey)

router.put("/Updateprice", bookController.Upadateprice)



module.exports = router;