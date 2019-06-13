var mongoose = require('mongoose');
const Schema = mongoose.Schema

module.exports = {
    
}

var commentSchema = new Schema({
    content: String
}, {
    timestamps: true
});

var gameSchema = new Schema({
    text: String,
    comments: [commentSchema],
    imageURL: String,
    name: String
    
}, {
    timestamps: true
});


module.exports = mongoose.model('Game', gameSchema);
