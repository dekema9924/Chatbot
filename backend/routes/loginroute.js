

const express = require('express');
const loginroute = express.Router();
const passport = require('passport')



loginroute.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));


loginroute.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
});



loginroute.get('/', (req, res) => {
    res.send("login route")
})

module.exports = loginroute