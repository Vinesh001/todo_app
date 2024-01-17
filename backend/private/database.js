const mongoose = require('mongoose');

const database = () => {
    mongoose.connect('mongodb+srv://vinesh:ZPeJqoeB3pV8VcBP@cluster0.jshxrz1.mongodb.net/')
    .then(function(db){
        console.log('db connected');
    })
    .catch(function(err){
        console.log(err);
    })
}

module.exports = database;