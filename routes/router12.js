import express from 'express';
import Daily from '../Models/Daily.js';
import Quarterly from '../Models/Quarterly.js';
import Yearly from '../Models/Yearly.js';
const router = express.Router()

router.post('/',async(req,res)=>{
   
    if(req.body.table==='daily'){
        let date = new Date(req.body.Date);
        console.log(date);
        try{
            let find = await Daily.find({
            date:{
                    $gte: new Date(date.getFullYear(), date.getMonth(), date.getDate()), // Start of the day
                    $lt: new Date(date.getFullYear(), date.getMonth(), date.getDate()+1)  // End of the day
            }
        })
        console.log(find);
    }catch(err){
            console.log(err)
        }
    }
    // else if(req.body.table==='quarterly'){

    // }else{

    // }
})

export default router;