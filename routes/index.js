const express = require('express');
const router = express.Router();
console.log("Router added succesfully");
//require the controller
const homeController= require('../controllers/home_controller');
//for the home page
router.get('/',homeController.home);
//for create request
router.post('/create',homeController.create);
//for delete request
router.post('/delete',homeController.delete);
module.exports=router;