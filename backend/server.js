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
         origin: "https://bot019.netlify.app", 
         methods: "GET,HEAD,branchPUT,PATCH,POST,DELETE",
         credentials: true, 
   })
);

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 20 * 60 * 1000, // 20 minutes
      secure: process.env.NODE_ENV === 'production',  // Ensure it's secure only in production
      sameSite: 'None',  // Required for cross-origin requests
      path: '/',
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

