const todo = require("../models/schema");
//for rendering home page
module.exports.home=function(req,res){
 todo.find({},function(err,fetchtodo){
   if(err){
       console.log("error in fetching");
       return;
   }
   return res.render('home',{
       title: "TODO app",
       todoList: fetchtodo
      });
 });
};

//for creating new task
module.exports.create=function(req,res){
    todo.create({
        description:req.body.description,
        date:req.body.date,
        category:req.body.category
    },function(err,newtodo){
        if(err){
            console.log('erorr###');
            return;
        }
        return res.redirect('back');
    });
};
//for deleting selected tasks
module.exports.delete=function(req,res){
    
    if(req.body.items.length>0)
    {
    for(let i of req.body.items){
    todo.findByIdAndDelete(i,function(err){
        if(err){
            console.log("error deleting");
            return;
        }
    });
    } 
}
    return res.redirect('back');   
};