import mongoose,{Schema} from 'mongoose';

let year  = new Date().getFullYear()

const yearlySchema = new Schema({
    YEAR:{
        type:Number,
        default:year
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

const Yearly  = mongoose.model('yearly',yearlySchema);
Yearly.createIndexes();
export default Yearly;