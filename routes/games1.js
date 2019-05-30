var express = require('express');
var router = express.Router();
var gameOneCtlr = require('../controllers/games1');


router.get('/', gameOneCtlr.showDetail);



module.exports = router;