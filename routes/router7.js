import express from 'express';
import {body,validationResult } from 'express-validator';
import User from '../Models/User.js'

const router = express.Router();

router.post('/',[body('roname','Roname must be at least 3 letters').isLength({min:3}),
body('password','password must be 8 characters long').isLength({min:8})],(req,res)=>{
    console.log(req.body)
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors.array());
        return res.status(400).json({error:errors.array()})
    }
    User.create({
        roname:req.body.roname.toUpperCase(),
        password:req.body.password
    }).then((user)=>{
        res.json(user)
    })
    .catch((err)=>{
        console.log(err);
        res.json({error:err})
    });
})

export default router;