var express = require('express');
var router = express.Router();
const passport = require("passport");

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log('/')
  res.render('index', {
    title: "Landing",
    user: req.user
  });
});


router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile']}
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }

));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/')
});
module.exports = router;
