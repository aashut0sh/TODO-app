//now to start the project we have to first require express to use it.
const express = require('express');
const port = 8000;
//express has to be called so that its different functions can be used.
const app = express();

//connection to mongoose
const db = require('./config/mongoose');
//to decode the sent data
app.use(express.urlencoded());

//setting up routes
app.use('/',require('./routes'));

//setting up ejs
app.set('view engine','ejs');
app.set('views','./views');

//accesss static files
app.use(express.static('./assets'));

//run the server on port
app.listen(port,function(err){
    if(err)
    {
        console.log(`Error in firing up the server: ${err}`);
    }
    //if no error then
    console.log(`Server is running successfully on port:${port}`);
});
