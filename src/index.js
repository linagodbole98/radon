const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const miGlb= function (req,res){
    console.log("hi i am global middleware")
    next()
}
const middleware = function (req,res,next){
    var currentDate = new Date();
    var datetime = "Last Sync : " + currentDate.getDate()+"/"
                                  + (currentDate.getMonth()+1) + "/"
                                  + currentDate.getFullYear()  + "/"
                                  + currentDate.getHours()  + ":"
                                  +currentDate.getMinutes() + ":"
                                  +currentDate.getSeconds();

    let ip =req.ip
    let url = req.originalUrl
    console.log(`${datetime} ${ip} ${url}`)
    next();                     
}

app.use(middleware)

mongoose.connect("mongodb+srv://linagodbole99:dAix1EtU6C6yxJDR@cluster0.oip3eje.mongodb.net/lina-DB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        next();
  }
  );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
