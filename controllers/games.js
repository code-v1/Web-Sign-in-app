
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
    req.body.user = req.params.id;
};

function newGame (req, res){
    res.render('games/new');
};

function edit(req, res) {
    Game.findById(req.params.id, (err, game) => {
        res.render("games/edit", {
            title: `${game.name}`,
            user: req.user,
            recipe
        });
    });
}