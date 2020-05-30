const path = require('path');
var express = require("express");

const log = console.info.bind(
    console,
    `[ \x1b[32minfo\x1b[0m ] [vanilla-express-demo]: `
)

const error = console.error.bind(
    console,
    `[ \x1b[31merror\x1b[0m ] [vanilla-express-demo]: `
)

module.exports = {
    monetized: async (req, res, next) => {
        const {requestId} = req.params
        log(`Validating requestId: ${requestId}`)

        // Request for content must be called after successful WM validation on client.
        error(`Couldn't verify requestId: ${requestId}`)
        setTimeout(()=>next(),2000)
    },
    proof: async(req, res) => {
        res.send({
            proof: "xxx"
        })
    },
}



