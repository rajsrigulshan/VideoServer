import dotenv, { configDotenv } from "dotenv";
configDotenv({
    path:'./.env'
})
import connectDB from "./database/dataBaseConnection.js";
import { app } from "./app.js";


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MongoDB Connection Failed !!!  ",error)
})



