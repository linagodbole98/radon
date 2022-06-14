const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://linagodbole99:dAix1EtU6C6yxJDR@cluster0.oip3eje.mongodb.net/lina-DB2", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmE4YTJjNzgzYzQ3MTkyZmI1MGQ5NDEiLCJiYXRjaCI6IlJhZG9uIiwib3JnYW5pc2F0aW9uIjoiRnVuY3Rpb25VcCIsImlhdCI6MTY1NTIxODk0Mn0.Ai9kS-XdnkTjv3P3lTWSk0idSTsAyGDsJq4fhyiuLqs