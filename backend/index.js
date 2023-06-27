const express=require("express");
const app=express();

const {connection}=require("./config/db");

require("dotenv").config();

app.get("/",(req,res)=>{
    res.send("Basic Endpoint of todo api")
})


app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("Connected to DB")
    } catch (error) {
        console.log("Getting Error while getting connection to DB")
    }
    console.log(`Server is running on port no ${process.env.port}`)
})
