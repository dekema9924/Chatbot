require('dotenv').config()
const express = require('express')
const loginroute = require('./routes/loginRoute')
const app = express()
const port = process.env.PORT
const GoogleStrategy = require('./auth/googleStrategy')
const passport = require('passport')
const session = require('express-session')



//middleware


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true }

}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', loginroute)






app.listen(port, ()=>{
    console.log(`server open on port ${port}`)
})

