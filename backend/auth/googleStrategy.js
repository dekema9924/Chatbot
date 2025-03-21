
const passport = require('passport')
var GoogleStrategy = require('passport-google-oauth20').Strategy;



passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(obj, done) {
    // User.findById(id, function (err, user) {
    //   done(err, user);
    // });
    done(null, obj);
});



passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://chatbot-ovll.onrender.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    return done(null, profile);

  }
));