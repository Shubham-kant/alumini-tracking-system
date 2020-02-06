const Alumni=require('../models/alumni');
const val='name-123'
module.exports.createSession=function(req,res){
    return res.redirect('/');
}
module.exports.signUp=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/alumni/profile');
    }
    return res.render('alumniSignUp');
}
module.exports.profile=function(req,res){
    return res.render('alumni_home');
}
module.exports.signIn=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/alumni/profile');
    }
    return res.render('alumni_sign_in');
}

module.exports.create=function(req,res){
    console.log('reached');
    console.log(req.body);
    if(req.body.password!=req.body.confirm_password){
        console.log('password doesnt matched');
        return res.redirect('back');
    }
    Alumni.findOne({email:req.body.email},function(err,alumni){
        if(err){
            console.log('error in finding alumni');
            return;
        }
        
        if(!alumni){
            Alumni.create({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                collegename:req.body.college,
                branch:req.body.branch,
                address:req.body.address,
                phone:req.body.phone,
                country:req.body.country,
                avatar:val,
                sex:req.body.gender,
                batch:req.body.batchyear,
                dob:req.body.dob
            },function(err,currentAlumni){
                if(err){
                    console.log('error in creating a alumni');
                    return;
                }
                console.log(currentAlumni);
                return res.redirect('/alumni/sign-in');


            })
            // Alumni.create(req.body,function(err,currentAlumni){
            //     if(err){
            //         console.log('error in creating a alumni');
            //          return;
            //     }
            //     console.log(currentAlumni);
            //      return res.redirect('/alumni/sign-in');
            // })
        }
        else{
            return res.redirect('back');
        }
    })



}
module.exports.destroySession=function(req,res){
    req.logout();
    return res.redirect('/');
}