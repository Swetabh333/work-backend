import mongoose from "mongoose";

const mongoURI ='mongodb://0.0.0.0:27017/bank'

const connect = async () => {
    await mongoose.connect(mongoURI);
    console.log('Connected to mongodb');
};

export default connect;
