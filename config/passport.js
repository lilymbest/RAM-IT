var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var Tech = require('../models/Tech');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },

  function(accessToken, refreshToken, profile, cb) {
    Tech.findOne({'googleId' : profile.id }, function(err, tech){
        if(err) return cb(err);
        if(tech) {
            return cb(null, tech);
        } else {
            var newTech = new Tech({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id,
                admin: true
            });
            newTech.save(function(err){
                if(err) return cb(err);
                return cb(null, newTech);
            });
        }
    });
  }
));

passport.serializeUser(function(tech, done){
    done(null, tech.id);
});

passport.deserializeUser(function(id, done){
    Tech.findById(id, function(err, tech){
        done(err, tech);
    });
});