

const express = require('express');
const loginroute = express.Router();
const passport = require('passport')



loginroute.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));


    loginroute.get('/auth/google/callback',
        passport.authenticate('google', { failureRedirect: '/' }),
        function (req, res) {
            // Successful authentication, redirect to frontend app.
            const redirectUrl = process.env.NODE_ENV === 'production' 
                ? 'https://effortless-pastelito-663bf8.netlify.app/'  // Production URL
                : 'http://localhost:5173/gemini';  // Local development URL
            
            res.redirect(redirectUrl);
        }
    );
loginroute.get('/', (req,res)=>{
    res.send('Homepage')
})



module.exports = loginroute