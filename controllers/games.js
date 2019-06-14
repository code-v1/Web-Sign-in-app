
const Game = require('../models/game')

module.exports = {
    create,
    new: newGame,
    show,
    index,
    edit,
    update,
    delete: deleteGame
}

function update (req, res) {
    Game.findById(req.params.id, (err, game) => {
        game.text= req.body.text 
        game.save(err => {
            res.redirect(`/games/${game._id}`)
        })
    })
}



function index (req, res) {
    Game.find({}, (err, games)=> {
        res.render('games/index', {
            games
        });
        
    })
};

function show(req, res) {
    Game.findById(req.params.id, (err, game) => { 
        console.log(game)
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
            game
        });
    });
}

function deleteGame (req, res) {
    Game.findByIdAndDelete(req.params.id, (err) => {
        res.redirect("/games")
    })
}