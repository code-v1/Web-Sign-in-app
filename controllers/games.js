
var Game = require('../models/game')

module.exports = {
    create,
    new: newGame,
    show
}

function show(req, res) {
    Game.findById(req.params.id, (err, game) => {
        res.render("games/show", {
            title: game.name,
            user: req.user,
            game
        });
    });
}

function create (req, res){
    Game.create(req.body, function(err, game){
        res.redirect('/')
    })
};

function newGame (req, res){
    res.render('games/new');
};