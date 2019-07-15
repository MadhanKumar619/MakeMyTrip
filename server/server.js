var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.port || 5000;

var app = express();

app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended : false
    })
)

var mongodbURI = "mongodb+srv://codingmart42:codingmart42@musichunt01-4ybzp.mongodb.net/musicHunt";

mongoose.connect(
    mongodbURI, { useNewUrlParser : true }
).then(()=>{
    console.log("MongoDb connected");
}).catch(err=>{
    console.log(err);
})

app.listen(process.env.port||port, function(){
    console.log("Server is running on port : " + port)
})
app.get('/all', function(req, res){
    res.send("hi");
})