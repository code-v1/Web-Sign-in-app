
var Game = require('../models/games')

module.exports = {
    create,
    new: newGame,
    show
}

function show(req, res){

    Game.findById(req.params.id, function(err, game){
        res.render('games/show', {game});
    });
};

function create (req, res){
    Game.create(req.body, function(err, game){
        res.redirect('/')
    })
};

function newGame (req, res){
    res.render('games/new');
};