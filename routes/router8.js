import express from 'express';
import Daily from '../Models/Daily.js';
import Quarterly from '../Models/Quarterly.js';
import Yearly from '../Models/Yearly.js';

let month = new Date().getMonth();
let findDate = new Date();
let quarter  = Math.floor((month+1)/4)+1;
let year  = new Date().getFullYear();

const router  = express.Router()

router.post('/',async (req,res)=>{
    
    
    try{
        
        if(Object.keys(req.body).length !== 0){

            if(req.body.table === 'daily'){
                let update  = await Daily.updateOne({
                    RO:req.body.RO.toUpperCase(),
                    date: {
                        $gte: new Date(findDate.getFullYear(), findDate.getMonth(), findDate.getDate()), // Start of the day
                        $lt: new Date(findDate.getFullYear(), findDate.getMonth(), findDate.getDate() + 1)  // End of the day
                      }
                },{
                    $set:{
                        CCC:parseInt(req.body.creditC),
                        IBC:parseInt(req.body.IBC),
                        BHIMC:parseInt(req.body.BHIMC),
                        POSC:parseInt(req.body.PosC),
                        UPIC:parseInt(req.body.UPIC)
                    }
                })
                console.log(update);
                if(update.modifiedCount!==0){
                    res.status(200).send('Updated successfully')
                }else{
                    res.status(400).send('update unsuccessful');
                }
            }else if(req.body.table==='quarterly'){
                let update = await Quarterly.updateOne({
                    RO:req.body.RO ,
                    QUARTER: quarter
                },{
                    $set:{
                        CCC:parseInt(req.body.creditC),
                        IBC:parseInt(req.body.IBC),
                        BHIMC:parseInt(req.body.BHIMC),
                        POSC:parseInt(req.body.PosC),
                        UPIC:parseInt(req.body.UPIC) 
                    }
                })
                console.log(update);
                if(update.modifiedCount!==0){
                    res.status(200).send('Updated successfully')
                }else{
                    res.status(400).send('update unsuccessful');
                }
            }else{
                let update = await Yearly.updateOne({
                    RO:req.body.RO ,
                    YEAR:year
                },{
                    $set:{
                        CCC:parseInt(req.body.creditC),
                        IBC:parseInt(req.body.IBC),
                        BHIMC:parseInt(req.body.BHIMC),
                        POSC:parseInt(req.body.PosC),
                        UPIC:parseInt(req.body.UPIC) 
                    }
                })
                console.log(update);
                if(update.modifiedCount!==0){
                    res.status(200).json({update:'Updated successfully'})
                }else{
                    res.status(400).json({update:'update unsuccessful'});
                }
            }

       
    // }
}}catch(err){
    console.log(err)
}});

export default router;