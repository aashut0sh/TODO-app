const mongoose = require('mongoose');
//to make connection
mongoose.connect('mongodb://localhost/TODO_DATABASE');
//now acquire connection
const db= mongoose.connection;
db.on('error',console.error.bind(console,'error connecting to mongodb'));
db.once('open',function(){
    console.log("succesfully connected to mongoDB");
});
module.exports=db;