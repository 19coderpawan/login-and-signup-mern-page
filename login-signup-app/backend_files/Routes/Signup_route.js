const express=require('express');
const Router=express.Router();
const userSchema=require('../Schema_folder/UserSchema');
const {body,validationResult}=require('express-validator');
const bcrypt=require('bcrypt');



Router.post('/createUser',[
    body('email','invalid email ').isEmail(),
    body('password','minimum length should be 6').isLength({min:6}),
],async(req,res)=>{
    const error=validationResult(req);
    if(!error.isEmpty()){
        res.status(400).send(error.array());
    } 
    const salt=await bcrypt.genSalt(10);
    let hashedpassword=await bcrypt.hash(req.body.password,salt);
    try {   
        await userSchema.create({
            name:req.body.name,
            email:req.body.email,
            password:hashedpassword,
            age:req.body.age
        })
        // res.status(200).send({
        //     name:req.body.name,
        //     email:req.body.email,
        //     password:hashedpassword,
        //     age:req.body.age
        // })
        res.json({success:true})
    } catch (error) {
        throw error;
    }
})

module.exports=Router;