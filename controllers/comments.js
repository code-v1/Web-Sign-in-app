var User = require('../models/user')
var Game = require('../models/games');


module.exports = {
    addComment,
    delete: deleteComment
    
}


function addComment(req, res) {
    Game.findById(req.params.id, function(err, game) {
      game.comments.push(req.body);
      game.save(function(err) {
        res.redirect(`/games/${game._id}`);
      });
    });
  }

  function deleteComment(req, res) {
      Game.deleteOne(req.params.id);
      res.redirect('/games');
  }