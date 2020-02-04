const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller.js');



router.get('/',homeController.home);
router.use('/alumni',require('./alumni'));


console.log('router express is working....');
module.exports=router; 