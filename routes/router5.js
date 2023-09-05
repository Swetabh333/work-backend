import express from 'express';
import { NewUser } from './router1.js';
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({user:NewUser});
});

export default router;