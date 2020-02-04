const express=require('express');
const router=express.Router();
const alumniController=require('../controllers/alumni_controller.js');



router.get('/sign-up',alumniController.signUp);
router.get('/sign-in',alumniController.signIn);

router.post('/create',alumniController.create);



console.log('router.express is working....');
module.exports=router; 