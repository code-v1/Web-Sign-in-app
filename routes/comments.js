var express = require('express');
var router = express.Router();
var commentsCtlr = require('../controllers/comments');
var gamesCtlr = require("../controllers/games");


router.get("/games/:id/comments", gamesCtlr.show );
router.post("/games/:id/comments", isLoggedIn, commentsCtlr.create);
router.delete("/games/:gameid/comments/:commentid", isLoggedIn, commentsCtlr.delete);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/users/index')
}

module.exports = router;