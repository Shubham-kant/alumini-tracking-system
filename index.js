const express =require('express');
const port=8000;
const app=express();
const cookieParser=require('cookie-parser');
const db=require('./config/mongoose');
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');
const MongoStore=require('connect-mongo')(session);
app.use(express.urlencoded());
app.use(cookieParser());
const expressLayouts=require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.use(express.static('assets'));

app.set('view engine','ejs');
app.set('views','./views');
app.use(session({
    name:'alumnitrack',
    // TODO change the secret before deployment in production mode
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    strore:new MongoStore(
        {
            mongooseConnection:db,
            autoRemove:'disabled'
        },function(err){
            console.log(err||('connect-mongo setup ok'));
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        // console.log(err);
        //this is just interpolation `` -these backtics..
        //${} in these brackets the particular thing gets evaluated..
        //to include a variable inside a string .this is interpolation
        console.log(`error is : ${err}`);
    }
    console.log(`port is running on port no:: ${port}`);
}); 