 const express = require('express');
const externalModule = require('../logger/logger') //handler and controller
const formatterModule = require('../validator/formatter')
const helperModule = require('../util/helper')
const router = express.Router();


//---------------------------------assignment number-3------------------------------------
let players = []




router.post('/players', function (req, res) {
    
    let newPlayer = req.body
    let newPlayersName = newPlayer.name
    let isNameRepeated = false

    //let player = players.find(p => p.name == newPlayersName)

    for(let i = 0; i < players.length; i++) {
        if(players[i].name == newPlayersName) {
            isNameRepeated = true;
            break;
        }
    }

    //undefined is same as false/ a falsy value
    if (isNameRepeated) {
        //Player exists
        res.send("This player was already added!")
    } else {
        //New entry
        players.push(newPlayer)
        res.send(players)
    }
});


//-------------------------------------done-----------------------------------------n



router.get('/hlw/:name',function(req,res){
    //console.log("starting name",req.params['name'],'linaaa');
    req.send("starting name",req.params['name']);
});
router.get('/hello1',function(req,res){
    req.send("api working");
})
module.exports = router;

