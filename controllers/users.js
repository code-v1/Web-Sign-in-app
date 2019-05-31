const User = require('../models/user');
const Game = require('../models/games');

module.exports = {
    index
};


function index(req, res, next) {
  Game.find({}, function(err, games){
    res.render('games/index', {
      games
    })
  })
    
  };

  