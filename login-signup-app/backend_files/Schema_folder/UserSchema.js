const mongoose=require('mongoose');

const {Schema}=mongoose;

const UserSchema=new Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
   age:{
    type:Number,
   }
});

module.exports=mongoose.model("exitsusers",UserSchema);

