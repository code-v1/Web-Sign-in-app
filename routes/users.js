var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users')

/* GET users listing. */
router.get('/', usersCtrl.index);
router.get('/index', function(req, res){
    res.render('users/index', {user:req.user});
})

module.exports = router;
