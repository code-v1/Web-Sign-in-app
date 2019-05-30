const mongoose = require('mongoose')
const connectionString = 'mongodb://localhost/users';

mongoose.connect(connectionString, {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
    console.log("connected")
}) 