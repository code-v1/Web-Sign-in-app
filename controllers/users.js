const User = require('../models/user');
const Game = require('../models/game');

module.exports = {
    show
};


function show(req, res) {
  User.findById(req.params.id, (err, user) => {
      Game.find({ user: user._id }, (err, games) => {
          res.render("users/show", {
              title: "My Act",
              user,
              games
          });
      });
  });
}