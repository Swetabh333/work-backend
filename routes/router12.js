import express from 'express';
import Daily from '../Models/Daily.js';
import Quarterly from '../Models/Quarterly.js';
import Yearly from '../Models/Yearly.js';
import fastcsv from 'fast-csv';
import fs, { write } from 'fs';


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

        const csvStream = fastcsv.format({headers:true});

        if(!fs.existsSync('public/files/export')){
            if(!fs.existsSync('public/files')){
                fs.mkdirSync('public/files/')
            }
            if(!fs.existsSync('public/files/export')){
                fs.mkdirSync('./public/files/export')
            }
        }

        const writeableStream = fs.createWriteStream(
            "public/files/export/users.csv"
        )

        csvStream.pipe(writeableStream);

        writeableStream.on('finish',()=>{
            res.status(200).json({
                downloadUrl:'http://localhost:8080/files/export/users.csv'
            });
        });

        if(find.length >0){
            find.map((elem)=>{
                csvStream.write({
                    date:elem.date?elem.date:'-',
                    RO:elem.RO?elem.RO:'-',
                    DCC:elem.DCC?elem.DCC:'-',
                    DCA:elem.DCA?elem.DCA:'-',
                    CCC:elem.CCC?elem.CCC:'-',
                    CCA:elem.CCA?elem.CCA:'-',
                    IBC:elem.IBC?elem.IBC:'-',
                    IBA:elem.IBA?elem.IBA:'-',
                    BHIMC:elem.BHIMC?elem.BHIMC:'-',
                    BHIMA:elem.BHIMA?elem.BHIMA:'-',
                    POSC:elem.POSC?elem.POSC:'-',
                    POSA:elem.POSA?elem.POSA:'-',
                    UPIC:elem.UPIC?elem.UPIC:'-',
                    UPIA:elem.UPIA?elem.UPIA:'-'
                })
            })
        }

        csvStream.end()
        writeableStream.end()
        
    }catch(err){
            res.status(401).json(err)
        }
    }
    
})

export default router;