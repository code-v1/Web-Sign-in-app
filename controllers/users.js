const User = require('../models/user');

module.exports = {
    index, 
    addComment
};


function index(req, res, next) {
      res.render('users/index', {
        user: req.user,
        
      });
    
  };

  function addComment(req, res, next) {
      req.user.comments.push(req.body);
      req.user.save(function(err){
        res.redirect('/users');
      });
  }