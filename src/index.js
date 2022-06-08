// 
const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://linagodbole99:dAix1EtU6C6yxJDR@cluster0.oip3eje.mongodb.net/lina-DB", {
    
    useNewUrlParser: true
})
// mongoose.connect("mongodb+srv://vikas:1234567890@cluster0.mkjn9xp.mongodb.net/Snehal3497-DB?retryWrites=true&w=majority", {
//     useNewUrlParser: true
//  })

.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});


