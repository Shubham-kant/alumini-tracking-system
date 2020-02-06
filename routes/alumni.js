const express=require('express');
const router=express.Router();
const alumniController=require('../controllers/alumni_controller.js');
const passport=require('passport');


router.get('/sign-up',alumniController.signUp);
router.get('/sign-in',alumniController.signIn);
router.get('/profile',passport.checkAuthentication,alumniController.profile);
router.post('/create',alumniController.create);
router.post('/create-session',passport.authenticate(
    'local',
    {
        failureRedirect:'/alumni/sign-in'
    }
),alumniController.createSession);

router.get('/sign-out',alumniController.destroySession);

console.log('router.express is working....');
module.exports=router; 