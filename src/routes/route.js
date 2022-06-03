 const express = require('express');
const externalModule = require('../logger/logger') //handler and controller
const formatterModule = require('../validator/formatter')
const helperModule = require('../util/helper')
const router = express.Router();



//const { Router } = require('express');
//const express = require('express');

let movies=['Rang de basanti',
'The shining',
'Lord of the Rings',
'Batman begins'];
router.get("/movies",function(req,res){
    res.send(movies);
})
router.get("movies/:indexNumber",function(req,res){
    let movies=['Rang de basanti','The shining','Lord of the Rings','Batman begins'];
    let index=req.params.indexNumber;
    if(movies[index]===undefined){
    res.send("request you to see valid index!")}
    res.send(movies[index]);
})
let films=[
    {
        id:1,name:"The shining"
    },
    {
        id:2,name:"Incending"
    },
    {
        id:3,name:"Rang de basanti"
    },
    {
        id:4, name:"Batman begins"
    },
];

router.get("/films",function(req,res){
    res.send(films);
})

router.get("films/:filmId",function(req,res){

    let films=[
        {
            id:1,name:"The shining"
        },
        {
            id:2,name:"Incending"
        },
        {
            id:3,name:"Rang de basanti"
        },
        {
            id:4, name:"Batman begins"
        },
    ];
    
    let filmId=req.params.filmId;
    let output=films.find((x) =>x.id===filmId);
    if (output ===undefined) {res.send("no movies")}
    res.send(output);
    res.send('no')


});

router.get('/profile/:start/:end', function (req, res) {
    console.log("Starting Page: ", req.params['start']);
    console.log("Ending Page: ", req.params['end']);
    res.send("hello dosto");
})

router.get('/hlw/:name',function(req,res){
    //console.log("starting name",req.params['name'],'linaaa');
    req.send("starting name",req.params['name']);
});

module.exports = router;

