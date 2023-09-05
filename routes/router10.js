import express from 'express';
import Daily from '../Models/Daily.js';
import Quarterly from '../Models/Quarterly.js';
import Yearly from '../Models/Yearly.js';

const router  = express.Router();


let month = new Date().getMonth();
let findDate = new Date();
let quarter  = Math.floor((month+1)/4)+1;
let year  = new Date().getFullYear();

router.post('/',async(req,res)=>{
    console.log(req.body)
    try{
        if(req.body){
            if(req.body.table==='daily'){
               let find = await Daily.find({
                date: {
                    $gte: new Date(findDate.getFullYear(), findDate.getMonth(), findDate.getDate()), // Start of the day
                    $lt: new Date(findDate.getFullYear(), findDate.getMonth(), findDate.getDate() + 1)  // End of the day
                  }
            },{
               });
               console.log(find)
               res.json(find);
            }else if(req.body.table === 'quarterly'){
                let find = await Quarterly.find({
                    QUARTER:quarter
                })
                console.log(find);
                res.json(find);
            }else{
                let find = await Yearly.find({
                    YEAR:year
                })
                console.log(find);
                res.json(find);
            }
        }
    }catch(err){
        console.log(err);
    }
})

export default router;