 const express = require('express');
const externalModule = require('../logger/logger') //handler and controller
const formatterModule = require('../validator/formatter')
const helperModule = require('../util/helper')
const router = express.Router();



//const { Router } = require('express');
//const express = require('express');

// let movies=['Rang de basanti',
// 'The shining',
// 'Lord of the Rings',
// 'Batman begins'];
// router.get("/movies",function(req,res){
//     res.send(movies);
// })
// router.get("movies/:indexNumber",function(req,res){
//     let movies=['Rang de basanti','The shining','Lord of the Rings','Batman begins'];
//     let index=req.params.indexNumber;
//     if(movies[index]===undefined){
//     res.send("request you to see valid index!")}
//     res.send(movies[index]);
// })
// let films=[
//     {
//         id:1,name:"The shining"
//     },
//     {
//         id:2,name:"Incending"
//     },
//     {
//         id:3,name:"Rang de basanti"
//     },
//     {
//         id:4, name:"Batman begins"
//     },
// ];

// router.get("/films",function(req,res){
//     res.send(films);
// })

// router.get("films/:filmId",function(req,res){

//     let films=[
//         {
//             id:1,name:"The shining"
//         },
//         {
//             id:2,name:"Incending"
//         },
//         {
//             id:3,name:"Rang de basanti"
//         },
//         {
//             id:4, name:"Batman begins"
//         },
//     ];
    
//     let filmId=req.params.filmId;
//     let output=films.find((x) =>x.id===filmId);
//     if (output ===undefined) {res.send("no movies")}
//     res.send(output);
//     res.send('no')


// });

router.get('/movies',function(req,res){
    const movies=['Rang De Basanti','The Shining','Lord of the Rings','Batman begins']
    res.send(movies)
})

router.get('/movies/:moviesNumber',function(req,res){
    const movie=['Rang De Basanti','The Shining','Lord of the Rings','Batman begins']
    let k=req.params.moviesNumber
    let flag=0
    for(let i=0;i<4;i++){
        if(k==i){
            flag=1
            break
        }
    }
        if(flag==1){
             return res.send(movie[k])
        }
        else{
            return res.send("please enter a valid index b/w 0-3")
        }
    })

router.get('/films',function(req,res){
    const film=[{'id':1,'name':'Rang De Basanti'},{'id':2,'name':'Incendies'},{'id':3,'name':'The Shining'},{'id':4,'name':'Finding Nemo'}]
    res.send(film)
})

router.get('/films/:filmid',function(req,res){
    const film=[{'id':1,'name':'Rang De Basanti'},{'id':2,'name':'Incendies'},{'id':3,'name':'The Shining'},{'id':4,'name':'Finding Nemo'}]
    let x=req.params.filmid
    x=x-1
    let flag=0
    for(let i=0;i<4;i++){
        if(i==x){
            flag=1
            break
        }}
        if(flag==1){
            return res.send(film[x])
        }
        else{
            return res.send("no movie exists with this id")
        }
    
})


router.get('/profile/:start/:end', function (req, res) {
    console.log("Starting Page: ", req.params['start']);
    console.log("Ending Page: ", req.params['end']);
    res.send("hello dosto");
})

router.get('/hlw/:name',function(req,res){
    //console.log("starting name",req.params['name'],'linaaa');
    req.send("starting name",req.params['name']);
});


//assignment of the use of lodash function
router.get('/hello',function(req,res){
    let i=['jan','feb','march','apr','may','june','july','aug','sept','oct','nov','dec']
    console.log("before chunk function:"+i)
    let k=lg.chunk(i,3)
    console.log(k)
    let j=[3,7,41,23,63,77,51,9,27,11]
    console.log("before tail function:"+j)
    let n=lg.tail(j)
    console.log(n)
    let x1=[1,4,3,2]
    let x2=[0,6,3,1]
    let x3=[4,7,5,0]
    let x4=[9,7,4,1]
    let x5=[7,3,1,0]
    let m=lg.union(x1,x2,x3,x4,x5)
    console.log(m)
    let x=[['horror','The Shining'],['drama','Titanic'],['thriler','Shutter Island'],['fantasy','Pans Labyrinth']]
    let pair=lg.fromPairs(x)
    console.log(pair)
    res.send('using the lodash package')

})
//assignment of finding the missing no
router.get('/sol1',function(req,res){
    let i=[1,2,3,4,5,7]
    let total1=0
    for(let x=0;x<6;x++){
      total1=total1+i[x]  
    }
    let last=i.pop()
    let sum=last*(last+1)/2;
    let missingno=sum-total1
    res.send("data: "+missingno)
})

router.get('/sol2',function(req,res){
    let i=[33,34,35,37,38]
    let total1=0
    let len=i.length
    for(let x=0;x<5;x++){
      total1=total1+i[x] 
    }
    let last=i.pop()
    let first=i[0]
    let sum=(len+1)*(last+first)/2;
    let missingno=sum-total1
    res.send("data: "+missingno)
})

module.exports = router;

