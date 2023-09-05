import express from 'express';
import User from '../Models/User.js';

const router = express.Router();

let NewUser = '';

router.post("/",async (req,res)=>{
    
    let uname = req.body.username.toUpperCase();
    let pass = req.body.password;
    try{let req1 = await User.findOne({'roname':uname});
    console.log(req1);
    NewUser = req1.accessType;

    if(pass === req1.password){
        res.json({user:NewUser});
    }}catch(err){
        console.log(err);
        res.json({error:err});
    }
    
})


export {router,NewUser};