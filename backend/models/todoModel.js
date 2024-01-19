const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    // userId:{
    //     type:String,
    //     required:true
    // }
})

const todoModel = mongoose.model('todoModel', todoSchema);

module.exports = todoModel;