var mongoose = require('mongoose');
const Schema = mongoose.Schema

module.exports = {
    deleteOne
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

function deleteOne(id) {
    todos.splice
}


module.exports = mongoose.model('Game', gameSchema);