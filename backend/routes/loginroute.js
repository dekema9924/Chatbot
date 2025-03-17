

const express = require('express');
const loginroute = express.Router();
const passport = require('passport')



loginroute.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));


loginroute.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('https://effortless-pastelito-663bf8.netlify.app');
});

loginroute.get('/', (req,res)=>{
    res.send('Homepage')
})



module.exports = loginroute