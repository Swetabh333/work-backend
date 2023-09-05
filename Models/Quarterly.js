import mongoose,{Schema} from 'mongoose';

let month = new Date().getMonth();

let quarter  = Math.floor((month+1)/4)+1;

const quarterlySchema = new Schema ({
    QUARTER :{
        type:Number,
        default:quarter
    },
    RO:{
        type:String,
        required:true,
        unique:true
    },
    DCC:{
        type:Number
    },
    DCA:{
        type:Number,
        default:0
    },
    CCC:{
        type:Number
    },
    CCA:{
        type:Number,
        default:0
    },
    IBC:{
        type:Number
    },
    IBA:{
        type:Number,
        default:0
    },
    BHIMC:{
        type:Number
    },
    BHIMA:{
        type:Number,
        default:0
    },
    POSC:{
        type:Number
    },
    POSA:{
        type:Number,
        default:0
    },
    UPIC:{
        type:Number
    },
    UPIA:{
        type:Number,
        default:0
    }
})

let Quarterly = mongoose.model('quarterly',quarterlySchema);
Quarterly.createIndexes();
export default Quarterly;