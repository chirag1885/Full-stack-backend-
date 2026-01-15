import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
});
connectDB();
























/*
alternative way to connect to mongodb

import express from "express";
const app = express();
;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.error("Error starting the server:", error);
            throw error;
        })
        app.listen(process.env.PORT , () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error); 
        throw error;
    }
})()*/