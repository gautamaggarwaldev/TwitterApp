import mongoose from 'mongoose';
import { MONGODB_URL } from './serverConfig.js';

export default async function ConnectDB() {
    try{
        await mongoose.connect(MONGODB_URL);
        console.log("Connected to Database Successfully....");
    }
    catch(error) {
        console.log("Failed to connect with database");
        console.log(error);
    }
}
