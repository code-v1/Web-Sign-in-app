var express = require('express');
var router = express.Router();
var gameCtlr = require('../controllers/games');


router.post('/', gameCtlr.create);
router.get('/new', gameCtlr.new);
router.get('/:id', gameCtlr.show);



module.exports = router;