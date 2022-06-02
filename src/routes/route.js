const express = require('express');
const externalModule = require('../logger/logger') //handler and controller
const formatterModule = require('../validator/formatter')
const helperModule = require('../util/helper')
const router = express.Router();



router.get('/test-me', function (req, res) { 
    console.log('--------this is assignment 1-----------')
    externalModule.welcome()
    console.log('--------this is assignment 2-----------')
    helperModule.date()
    helperModule.month()
    helperModule.getBatchInfo()
    console.log('--------this is assignment 3-----------')
    formatterModule.trim()
    formatterModule.tolowercase()
    formatterModule.touppercase()
   
    res.send('my todays assignment Done')
});

module.exports = router;
// adding this comment for no reason