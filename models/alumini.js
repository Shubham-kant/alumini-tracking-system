const mongoose=require('mongoose');
const alumniSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    collegename:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true

    },
    phone:{
        type:Number,
        required:true

    },
    country:{
        type:String,
        required:true
    },
    avatar:{

    },
    sex:{
        type:String,
        required:true

    },
    batch:{
        type:Number,
        required:true
    },
    dob:{
        type:String,
        required:true
    }
},{
    timestamps:true
});
const Alumni=mongoose.model('Alumni',alumniSchema);
module.exports=Alumni;