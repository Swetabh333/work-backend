import express from 'express';
import Daily from '../Models/Daily.js';
import Quarterly from '../Models/Quarterly.js';
import Yearly from '../Models/Yearly.js';
const router = express.Router();

let month = new Date().getMonth();
let findDate = new Date();
let quarter  = Math.floor((month+1)/4)+1;
let year  = new Date().getFullYear();

router.post('/', (req,res)=>{
    
    if(req.body.table==='daily'){
        Daily.findOne({
        RO:req.body.RO.toUpperCase(),
        date: {
            $gte: new Date(findDate.getFullYear(), findDate.getMonth(), findDate.getDate()), // Start of the day
            $lt: new Date(findDate.getFullYear(), findDate.getMonth(), findDate.getDate() + 1)  // End of the day
          }
    }).then((resp)=>{
        console.log(resp)
        if(resp)
        {console.log(resp.RO === req.body.RO.toUpperCase())
        if(resp.RO === req.body.RO.toUpperCase()){
            res.json({error:'Error'});
        }else{
            Daily.create({
                RO:req.body.RO.toUpperCase(),
                CCC:parseInt(req.body.Credit),
                DCC:parseInt(req.body.Debit),
                IBC:parseInt(req.body.IB),
                BHIMC:parseInt(req.body.BHIM),
                POSC:parseInt(req.body.PoS),
                UPIC:parseInt(req.body.UPI)
            })
            .then((postdata)=>{
                console.log('Sent to db');
                res.json(postdata);
            }).catch((err)=>{
            res.json({error:err});
        })
        }}else{
            Daily.create({
                RO:req.body.RO.toUpperCase(),
                CCC:parseInt(req.body.Credit),
                DCC:parseInt(req.body.Debit),
                IBC:parseInt(req.body.IB),
                BHIMC:parseInt(req.body.BHIM),
                POSC:parseInt(req.body.PoS),
                UPIC:parseInt(req.body.UPI)
            })
            .then((postdata)=>{
                console.log('Sent to db');
                res.json(postdata);
            }).catch((err)=>{
            res.json({error:err});
        })
        }
    })}else if(req.body.table==='quarterly'){
        Quarterly.findOne({
            RO:req.body.RO.toUpperCase(),
            QUARTER:quarter
        }).then((resp)=>{
            console.log(resp)
            if(resp)
            {console.log(resp.RO === req.body.RO.toUpperCase())
            if(resp.RO === req.body.RO.toUpperCase()){
                res.json({error:'Error'});
            }else{
                Quarterly.create({
                    RO:req.body.RO.toUpperCase(),
                    CCC:parseInt(req.body.Credit),
                    DCC:parseInt(req.body.Debit),
                    IBC:parseInt(req.body.IB),
                    BHIMC:parseInt(req.body.BHIM),
                    POSC:parseInt(req.body.PoS),
                    UPIC:parseInt(req.body.UPI)
                })
                .then((postdata)=>{
                    console.log('Sent to db');
                    res.json(postdata);
                }).catch((err)=>{
                res.json({error:err});
                console.log(err);
            })
            }}else{
                Quarterly.create({
                    RO:req.body.RO.toUpperCase(),
                    CCC:parseInt(req.body.Credit),
                    DCC:parseInt(req.body.Debit),
                    IBC:parseInt(req.body.IB),
                    BHIMC:parseInt(req.body.BHIM),
                    POSC:parseInt(req.body.PoS),
                    UPIC:parseInt(req.body.UPI)
                })
                .then((postdata)=>{
                    console.log('Sent to db');
                    res.json(postdata);
                }).catch((err)=>{
                    console.log(err);
                res.json({error:err});
            })
            }
        })
    }else{
        Yearly.findOne({
            RO:req.body.RO.toUpperCase(),
            YEAR:year
            
        }).then((resp)=>{
            console.log(resp)
            if(resp)
            {console.log(resp.RO === req.body.RO.toUpperCase())
            if(resp.RO === req.body.RO.toUpperCase()){
                res.json({error:'Error'});
            }else{
                Yearly.create({
                    RO:req.body.RO.toUpperCase(),
                    CCC:parseInt(req.body.Credit),
                    DCC:parseInt(req.body.Debit),
                    IBC:parseInt(req.body.IB),
                    BHIMC:parseInt(req.body.BHIM),
                    POSC:parseInt(req.body.PoS),
                    UPIC:parseInt(req.body.UPI)
                })
                .then((postdata)=>{
                    console.log('Sent to db');
                    res.json(postdata);
                }).catch((err)=>{
                res.json({error:err});
            })
            }}else{
                Yearly.create({
                    RO:req.body.RO.toUpperCase(),
                    CCC:parseInt(req.body.Credit),
                    DCC:parseInt(req.body.Debit),
                    IBC:parseInt(req.body.IB),
                    BHIMC:parseInt(req.body.BHIM),
                    POSC:parseInt(req.body.PoS),
                    UPIC:parseInt(req.body.UPI)
                })
                .then((postdata)=>{
                    console.log('Sent to db');
                    res.json(postdata);
                }).catch((err)=>{
                res.json({error:err});
            })
            }
        })
    }
    
        
})

export default router;