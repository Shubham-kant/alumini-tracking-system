const express =require('express');
const port=8000;
const app=express();
const db=require('./config/mongoose');
app.use(express.static('assets'));
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