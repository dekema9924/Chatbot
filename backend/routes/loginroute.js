

const express = require('express');
const loginroute = express.Router();
const passport = require('passport')



loginroute.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));


loginroute.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('https://67d7af3cd38ae1e8b4d70fc8--famous-biscotti-f67277.netlify.app/');
});

loginroute.get('/', (req,res)=>{
    res.send('Homepage')
})



module.exports = loginroute