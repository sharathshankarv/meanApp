// importing packages

var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");

var app = express();

const route = require('./routes/route')

//defining port
const port = 3000;

mongoose.connect('mongodb://localhost:27017/meanapp');

mongoose.connection.on('connected',()=>{
    console.log('succesfully connected to DB');
})

mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('error: ' + err);
    }
})

app.use(cors());
app.use(bodyParser.json());
app.use('/api', route);

app.use(express.static(path.join(__dirname, 'views')));

//testing server
app.get('/',(req, res)=>{
    res.send("Your app is Printing");
})

app.listen(port, ()=>{
    console.log("Server started at port: " + port);
})