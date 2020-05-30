const path = require('path');
var express = require("express")
var vanillaMiddleware =require("./middleware")
var app = express()

const {
    vanillaProtected,
    proof
} = vanillaMiddleware

app.get('/image/:requestId',vanillaProtected,(req, res)=>{
    res.sendFile(path.join(__dirname+'/content/wm-icon.svg'));
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/proof',proof)


app.listen(3000)