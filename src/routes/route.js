// 
const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel.js")
const BookController= require("../controllers/bookController")

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.post("/getBooksInYear", BookController.getBooksInYear)

router.post("/getPerticularBook", BookController.getPerticularBook)

router.get("/getXINRBook", BookController.getXINRBook)

router.get("/getRandomBook", BookController.getRandomBook)



module.exports = router;