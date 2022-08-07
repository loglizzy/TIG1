const express = require("express")
const server = express()

const data = require("manager")("./data")
server.get("/", function(req, res) {
    
})