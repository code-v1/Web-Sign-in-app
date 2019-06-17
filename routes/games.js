var express = require('express');
var router = express.Router();
var gamesCtlr = require('../controllers/games');


router.get("/games", gamesCtlr.index);
router.get("/games/new",  gamesCtlr.new);
router.post("/users/:id/games", gamesCtlr.create);
router.get("/games/:id", gamesCtlr.show);
router.get("/games/:id/edit", gamesCtlr.edit);
router.put("/games/:id", gamesCtlr.update);
router.delete("/games/:id", gamesCtlr.delete);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/')
}



module.exports = router;