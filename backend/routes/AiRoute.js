
const express = require('express');
const sendchat = require('../controllers/sendchat');
module.exports = airoute = express.Router();


airoute.use(express.json())
airoute.use(express.urlencoded({extended: true}))


airoute.post('/', sendchat )


