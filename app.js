import express from "express";

const app=express();

app.get("/",(req,res)=>{
res.json({message:"Welcome to dummy backend"})
});

app.get("/check",(req,res)=>{
    res.json({message:"Welcome to check route"})
    
})

app.listen(3000,()=>{
    console.log("server started at port 3000")
});