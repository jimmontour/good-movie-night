require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const PatreonStrategy = require('passport-patreon').Strategy;
const path = require('path');

const app = express();

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new PatreonStrategy({
    clientID: process.env.PATREON_CLIENT_ID,
    clientSecret: process.env.PATREON_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/patreon/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// Middleware to ensure user is authenticated
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

app.use(express.static(__dirname));


// Routes

app.get('/main_content', ensureAuthenticated, (req, res) => {
    // Serve the main content page
    res.sendFile('/views/main_content.html', { root: __dirname });
});

app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname, 'views/login.html'));
  });

app.get('/auth/patreon', passport.authenticate('patreon'));

app.get('/auth/patreon/callback',
  passport.authenticate('patreon', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }
);

app.get('/main_content', ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, '/main_content'));
});

app.get('/', (req, res) => {
    // If the user is already logged in, redirect them to the main content
    if (req.isAuthenticated()) {
        res.redirect('/main_content');
    } else {
        // If the user is not logged in, redirect them to the login page
        res.redirect('/login');
    }
});

app.get('/logout', function(req, res){
    req.session.destroy(function(err) {
      res.redirect('/');
    });
  });
app.listen(3000, function() {
  console.log('App listening on port 3000!');
});