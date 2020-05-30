const path = require('path');
var express = require("express");

module.exports = {
    vanillaProtected: async (req, res, next) => {
        const {requestId} = req.params
        console.log(requestId)
        setTimeout(()=>next(),2000)
    },
    proof: async(req, res) => {
        res.send({
            proof: "xxx"
        })
    },
}



