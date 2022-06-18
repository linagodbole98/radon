const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const WeatherController = require("../controllers/WeatherController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/getWeather", WeatherController.getWeather)
router.get("/getSortedCities", WeatherController.getSortedCities)
router.get("/cowin/getByDistrictId", CowinController.getByDistrictId)
router.post("/createMeme", WeatherController.createMeme)
router.get("/cowin/states", CowinController.getStates)

router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/cowin/getdistrict",CowinController.getdistrict)
router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getsortedcity",CowinController.getsortedcity)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router; 