import express, { urlencoded } from "express";
import {config} from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbconnect } from "./database/dbconnect.js";
import messageRouter from "./router/messageRouter.js";
import registerRouter from "./router/registerRouter.js";

//----------------------------------------------------//

config({path: "./config/config.env"});// loads variables store in .env file to process.env 


//----------------------------------------------------//
const app = express(); //  app variables can implement express library functionalities now

//----------------------------------------------------//
app.use(cors({
    origin:[process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

//----------------------------------------------------//
app.use(cookieParser());
//----------------------------------------------------//
app.use(express.json()); // midddleware which converts json to string 
//----------------------------------------------------//
app.use(urlencoded({extended: true}));
//----------------------------------------------------//
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp//",
}));// middleware in an Express.js application to handle file uploads. 


//----------------------------------------------------//
app.use("/api/v1", messageRouter);
app.use("/api/v1",registerRouter);


dbconnect();


export default app;