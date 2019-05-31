var express = require('express');
var router = express.Router();
var commentsCtlr = require('../controllers/comments');


router.get('/', commentsCtlr.addComment);
router.post('/games/:id/comments', isLoggedIn , commentsCtlr.addComment);
router.delete('/:id', commentsCtlr.delete);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/users/index')
}

module.exports = router;