const express = require('express');
const _ = require("lodash")
const externalModule = require('../logger/logger') //handler and controller
const formatterModule = require('../validator/formatter')
const helperModule = require('../util/helper');
const { reverse, xor, get } = require('lodash');
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
router.get('/hello',function(req,res){
    let _ = require("lodash");
let arr = ['jan','feb','march','april','may','june','july','aug','sep','oct','nov','dec'];
console.log("Before: ", arr)
  
// Making chunks of size 3
console.log("After: ", _.chunk(arr, 3))
});

router.get('/tail',function(req,res){
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20];
   

    const odds = arr.filter(number => {
      return number % 2 !== 0;
    });
    
    console.log(_.tail(odds));

})


router.get('/union',function(req,res){
    const _ = require("lodash");  
  
// Use of _.union() method 
let gfg = _.union([20, 12,6,15], [8, 15, 6]); 
        
// Printing the output  
console.log(gfg)
});

router.get('/frompair',function(req,res){
    const _ = require('lodash');
  
let pairs = [['x', 1], ['y', 2], ['z', 3]]
  
let obj = _.fromPairs(pairs);
  
console.log(obj)
})

module.exports = router;
// adding this comment for no reason