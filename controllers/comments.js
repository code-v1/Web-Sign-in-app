
var Game = require('../models/game');


module.exports = {
    create,
    delete: deleteComment
    
}


function create(req, res){
  Recipe.findById(req.params.id, function(err, game)  {
      req.body.user = req.user._id;
      req.body.author = req.user.name;
      req.body.avatar = req.user.avatar;

      game.comments.push(req.body);
      game.save(err => {
          res.redirect(`/games/${game._id}`);
      });
  });
}



function deleteComment(req, res){
Game.findByIdAndUpdate(req.params.gameid, {$pull: {comments: {_id: req.params.commentid}}}, ()=>{
      res.redirect(`/games/${req.params.gameid}`);
  });
}