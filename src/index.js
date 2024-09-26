import dotenv, { configDotenv } from "dotenv";
configDotenv({
    path:'./.env'
})
import connectDB from "./database/dataBaseConnection.js";


connectDB();



