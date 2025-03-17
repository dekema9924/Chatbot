require('dotenv').config()
const express = require('express')
const loginroute = require('./routes/loginroute')
const app = express()
const port = process.env.PORT
const GoogleStrategy = require('./auth/googleStrategy')
const passport = require('passport')
const session = require('express-session')
const profileroute = require('./routes/profileroute')
const airoute = require('./routes/AiRoute')
const cors = require('cors')

//middleware
app.use(
    cors({
         origin: "https://67d7af3cd38ae1e8b4d70fc8--famous-biscotti-f67277.netlify.app", 
         methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
         credentials: true, 
   })
);

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,  // Set to false to avoid unnecessary session writes
    saveUninitialized: false, // Avoid storing uninitialized sessions
    cookie: {
        maxAge: 20 * 60 * 1000, // 20 minutes
        secure: true,
        sameSite: 'None'
    }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use('/', loginroute)
app.use('/profile', profileroute)
app.use('/api', airoute)






app.listen(port, ()=>{
    console.log(`server open on port ${port}`)
})

