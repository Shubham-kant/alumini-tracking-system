const passport=require('passport');
//imported passport-local module and especially Strategy property..
const LocalStrategy=require('passport-local').Strategy;
//imported alumni
const Alumni=require('../models/alumni');

//authentication using passport.js
passport.use(new LocalStrategy({
    //usernameField is inbuilt..
     usernameField:'email'
    },
    function(email,password,done){
        //find the alumni and establish the identity
        Alumni.findOne({email:email},function(err,alumni){
            if(err){
                console.log('error in finding alumni --> passport');
                return done(err);
            }
            if(!alumni || alumni.password!=password){
                console.log('invalid Username/Password');
                return done(null,false);
            }
            console.log(alumni);
            return done(null,alumni);
        });

    }
));
//serialising the alumni and decide which key is to be kept in the cookies
passport.serializeUser(function(alumni,done){
    done(null,alumni.id);
});
//deserialing the alumni  from the key in cookies
passport.deserializeUser(function(id,done){
    Alumni.findById(id,function(err,alumni){
        if(err){
            console.log('error in finding alumni --> passport ');
            return done(err);
        }
        return done(null,alumni);
    });

});
//to check user is authenticated or not
passport.checkAuthentication=function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/alumni/sign-in');


}
passport.setAuthenticatedUser=function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user=req.user;

    }
    next();

}

module.exports=passport; 