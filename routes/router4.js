import express from 'express';
import User from '../Models/User.js'
const router = express.Router();

router.post('/', async (req,res)=>{
    const result = await User.findOne({'accessType':'ADMIN'});
    console.log(result);
    if(req.body.password === result.password){
        res.json({verified:true})
    }else{
        res.json({verified:false})
    }
})

export default router;