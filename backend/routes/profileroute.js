
const express = require('express')
const verifyuser = require('../middleware/verifyuser')
module.exports = profileroute= express.Router()
const cookieParser = require("cookie-parser")


profileroute.use(cookieParser())
profileroute.use(verifyuser)


profileroute.get('/', (req, res)=>{
    res.status(200).json({result: req.user});
})