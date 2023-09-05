import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const mongoURI = process.env.DATABASE

const connect = async () => {
    await mongoose.connect(mongoURI);
    console.log('Connected to mongodb');
};

export default connect;
