import express from 'express';
import Daily from '../Models/Daily.js';
import Yearly from '../Models/Yearly.js';
import Quarterly from '../Models/Quarterly.js';

let month = new Date().getMonth();
let findDate = new Date();
let quarter  = Math.floor((month+1)/4)+1;
let year  = new Date().getFullYear();


const router = express.Router();

router.post('/',async(req,res)=>{

    let keys  = Object.keys(req.body)
    keys.forEach(async (key)=>{
        if(req.body[key].table==='daily'){
            try{
                let update = await Daily.updateOne({
                    RO:req.body[key].RO.toUpperCase(),
                    date: {
                        $gte: new Date(findDate.getFullYear(), findDate.getMonth(), findDate.getDate()), // Start of the day
                        $lt: new Date(findDate.getFullYear(), findDate.getMonth(), findDate.getDate() + 1)  // End of the day
                      }
                },{
                    $set:{
                        DCA:parseInt(req.body[key].DCA),
                        CCA:parseInt(req.body[key].CCA),
                        IBA:parseInt(req.body[key].IBA),
                        BHIMA:parseInt(req.body[key].BHIMA),
                        POSA:parseInt(req.body[key].POSA),
                        UPIA:parseInt(req.body[key].UPIA) 
                    }
                })
                
            }catch(err){
                console.log(err);
            }
    }else if(req.body[key].table==='quarterly')
    {
        try{
            let update = await Quarterly.updateOne({
                RO:req.body[key].RO.toUpperCase(),
                QUARTER:quarter
            },{
                $set:{
                    DCA:parseInt(req.body[key].DCA),
                    CCA:parseInt(req.body[key].CCA),
                    IBA:parseInt(req.body[key].IBA),
                    BHIMA:parseInt(req.body[key].BHIMA),
                    POSA:parseInt(req.body[key].POSA),
                    UPIA:parseInt(req.body[key].UPIA) 
                }
            })
        }catch(err){
            console.log(err)
        }
    }else{
        try{
            let update = await Yearly.updateOne({
                RO:req.body[key].RO.toUpperCase(),
                YEAR:year
            },{
                $set:{
                    DCA:parseInt(req.body[key].DCA),
                    CCA:parseInt(req.body[key].CCA),
                    IBA:parseInt(req.body[key].IBA),
                    BHIMA:parseInt(req.body[key].BHIMA),
                    POSA:parseInt(req.body[key].POSA),
                    UPIA:parseInt(req.body[key].UPIA) 
                }
            })
    }catch(err){
        console.log(err)
    }
    }
})
})

export default router;