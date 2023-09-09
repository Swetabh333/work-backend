import express from 'express';
import Daily from '../Models/Daily.js';
import Yearly from '../Models/Yearly.js';
import Quarterly from '../Models/Quarterly.js';

const router = express.Router();
let month = new Date().getMonth();
let findDate = new Date();
let quarter  = Math.floor((month+1)/4)+1;
let year  = new Date().getFullYear();

router.post('/',async(req,res)=>{
    console.log(req.body)
    try{
        if(req.body.table === 'daily'){
            let del = await Daily.deleteOne({
                RO:req.body.RO.toUpperCase(),
                date: {
                    $gte: new Date(findDate.getFullYear(), findDate.getMonth(), findDate.getDate()), // Start of the day
                    $lt: new Date(findDate.getFullYear(), findDate.getMonth(), findDate.getDate() + 1)  // End of the day
                  }
            })
            console.log(del);
            if(del.deletedCount!==0){res.status(200).send('Deleted successfully');}
            else{
                res.status(400).send('Deletion unsuccessful');
            }
        }else if (req.body.table==='quarterly'){
            let del = await Quarterly.deleteOne({
                RO:req.body.RO.toUpperCase(),
                QUARTER: quarter
            })
            console.log(del);
            if(del.deletedCount!==0){res.status(200).send('Deleted successfully');}
            else{
                res.status(400).send('Deletion unsuccessful');
            }
        }else{
            let del = await Yearly.deleteOne({
                RO:req.body.RO.toUpperCase(),
                YEAR:parseInt(year)
            })
            console.log(del);
            if(del.deletedCount!==0){res.status(200).send('Deleted successfully');}
            else{
                res.status(400).send('Deletion unsuccessful');
        }
        }
    }catch(err){
        console.log(err);
    }
})

export default router;
