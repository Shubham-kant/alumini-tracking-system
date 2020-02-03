const mongoose=require('mongoose');

const collegeSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    collegename:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    collegeid:{
        type:String,
        required:true,
        unique:true
    },
    reprensentative:{
        type:String,
        required:true

    },
    alumnis:[{
        type:mongoose.Schema.Types.ObjectId,
        //name of model to be linked
        ref:'Alumni'
    }]

},{
    timestamps:true
});
const College=mongoose.model('College',collegeSchema);
module.exports=College;

