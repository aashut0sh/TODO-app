//for creating the Schema on which the whole database system will be created
const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({

    description:{
        type: String,
        required: true
    },
    date :{
        type: Date,
        required: true
    },
    category:{
        type:String,
        required: true
    }

});
//this schema needs a CONTAINER! so here is todo container for the schema todoschema
const todo = mongoose.model('todo',todoSchema);

module.exports= todo;