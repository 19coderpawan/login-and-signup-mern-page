const express=require('express')
const Router2=express.Router();
const userSchema=require('../Schema_folder/UserSchema')
const bcrypt=require('bcrypt');
const {body,validationResult}=require('express-validator');
const jwt=require('jsonwebtoken');

Router2.post('/loginuser',[
    body('email','enter correct  email').isEmail(),
    body('password','password length should be 6').isLength({min:6})
],async(req,res)=>{
   let email=req.body.email;
   console.log(email);
   const error=validationResult(req);
   if(!error.isEmpty()){
    res.status(500).send(error.array());
   }
   try {
    
    const userEmail=await userSchema.findOne({email});
       console.log(userEmail);
       if(!userEmail){
        res.status(500).send("enter valid user name");
       }
       const comparepassword=await bcrypt.compare(req.body.password,userEmail.password);
       if(!comparepassword){
        res.status(500).send("password is incorrect");
       }
    //    payload for the jwt.
    const data={
        exitsusers:{
            id:userEmail.id
        }
    };
    let secertkey="mynameispawankushwahaiamagooddevloper"
    const jsonwebtoken= jwt.sign(data,secertkey);
    console.log(jsonwebtoken);
       return res.json({success:true,jwt:jsonwebtoken});

   } catch (error) {
    throw error;
   }
})

module.exports=Router2;

