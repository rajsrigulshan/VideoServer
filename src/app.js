import express, { json } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import {JSON_LIMIT,URL_DATA_LIMIT,PUBLIC_FOLDER_NAME} from "./constants.js"


const app= express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}));

app.use(express.json({limit:JSON_LIMIT}));


app.use(express.urlencoded({
    extended:true,
    limit:URL_DATA_LIMIT
}));

app.use(express.static(PUBLIC_FOLDER_NAME));

app.use(cookieParser());


export {app}
