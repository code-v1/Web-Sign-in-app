var express = require('express');
var router = express.Router();
var commentsCtlr = require('../controllers/comments');


router.get('/', commentsCtlr.addComment);



module.exports = router;