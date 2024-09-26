import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB =async () =>{
    try {
        console.log(process.env.MONGODB_URL);
        const DBConnectionInstanse = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log("MongoDB connected!!! ",DBConnectionInstanse.connection)
    } catch (error) {
        console.log("MONGODB_CONNECTION_FAILED: ",error);
        process.exit(1)
    }
}

export default connectDB;