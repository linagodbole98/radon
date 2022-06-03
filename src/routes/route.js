 const express = require('express');
const externalModule = require('../logger/logger') //handler and controller
const formatterModule = require('../validator/formatter')
const helperModule = require('../util/helper')
const router = express.Router();




router.get('/hlw/:name',function(req,res){
    //console.log("starting name",req.params['name'],'linaaa');
    req.send("starting name",req.params['name']);
});
router.get('/hello1',function(req,res){
    req.send("api working");
})
module.exports = router;

