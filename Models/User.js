import mongoose,{Schema} from 'mongoose';

const userSchema = new Schema({
    roname:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    accessType:{
        type:String,
        default:'CLIENT'
    }

})

let User = mongoose.model('user',userSchema)
User.createIndexes();

export default User;