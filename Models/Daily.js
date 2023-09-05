import mongoose,{Schema} from 'mongoose';
import moment from 'moment';

let date = new Date();
console.log(date);

const dailySchema = new Schema({
    date:{
        type:Date,
        default:date
    },
    RO:{
        type:String,
        required:true
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
dailySchema.index({
    RO:1,
    date:1
},{
    unique:true
})
let Daily = mongoose.model('daily',dailySchema);

export default Daily;