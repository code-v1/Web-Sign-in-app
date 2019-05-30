var express = require('express');
var router = express.Router();
var gameOneCtlr = require('../controllers/games');


router.get('/', gameOneCtlr.showDetail);



module.exports = router;