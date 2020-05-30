const path = require('path');
var express = require("express")
var middleware =require("./middleware")
var app = express()

const {
    monetized,
    proof
} = middleware

app.get('/image/:requestId',monetized,(req, res)=>{
    res.sendFile(path.join(__dirname+'/content/monetized-image.jpg'));
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/proof',proof)


app.listen(3000)