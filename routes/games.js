var express = require('express');
var router = express.Router();
var gamesCtlr = require('../controllers/games');


router.post("/games", gamesCtlr.index);
router.get("/users/:id/recipes/new", idLoggedIn, gamesCtlr.new);
router.get("/games/:id", gamesCtlr.show);



module.exports = router;