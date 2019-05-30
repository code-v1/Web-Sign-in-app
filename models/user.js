var mongoose = require('mongoose');
const Schema = mongoose.Schema

var commentSchema = new mongoose.Schema({
    text: String
}, {
    timestamps: true
});
var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    comments: [commentSchema]


}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
module.exports = mongoose.model('Comment', commentSchema);