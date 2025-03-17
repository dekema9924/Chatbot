

const express = require('express');
const loginroute = express.Router();
const passport = require('passport')



loginroute.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));


loginroute.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    function (req, res) {
        // Successful authentication, redirect home.
        console.log('User authenticated:', req.user);  // Log user info
        res.redirect(process.env.NODE_ENV === 'development' ? "http://localhost:3000" : "https://bot019.netlify.app/gemini");
    });

loginroute.get('/', (req,res)=>{
    res.send('Homepage')
})



module.exports = loginroute