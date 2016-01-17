var express = require('express');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var users = require('../api/users');

passport.use(new FacebookStrategy({
        clientID: '943822079037509',
        clientSecret: 'ce99a1dd09d31b3f5360a75879610484',
        callbackURL: "http://localhost:5000/auth/facebook/callback"
    }, function(accessToken, refreshToken, profile, done) {
        console.log('accessToken', accessToken);
        console.log('refreshToken', refreshToken);
        //console.log('profile', profile);

        users.findByFacebookIdOrCreate(profile)
            .then((user) => {
                done(null, user);
            }, (err) => {
                console.log('error', err)
            });
}));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

var router = express.Router();

router.get('/facebook', passport.authenticate('facebook'));
router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});


module.exports = router;
