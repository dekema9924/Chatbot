

const express = require('express');
const loginroute = express.Router();
const passport = require('passport')



loginroute.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));


loginroute.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('https://67d839b66d951f3371902874--monumental-piroshki-3176da.netlify.app/gemini');
});

loginroute.get('/', (req,res)=>{
    res.send('Homepage')
})



module.exports = loginroute