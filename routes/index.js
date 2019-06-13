var express = require('express');
var router = express.Router();
const passport = require("passport");

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: "Landing"
  });
});


router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile']}
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/home',
    failureRedirect: '/'
  }

));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/')
});
module.exports = router;
