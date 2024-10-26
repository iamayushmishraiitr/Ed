import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectTodb from "./DataBase/connecToDB";
import { Request,Response } from "express";
import Ed from "./Schema/formSchema";
const app =express() ;
dotenv.config();
app.use(cors());
const PORT = process.env.PORT;
app.get('/' ,(req:Request,res:Response)=>{
     res.send("hellow ")
})
app.post("/form", async (req:Request, res:Response) => {
  try {
    const newEd = new Ed(req.body); 
    const savedEd = await newEd.save(); 
    res.status(201).json("ho gaya"); 
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal server error" }); 
  }
});
app.listen(PORT, () => {
  connectTodb() ;
  console.log(`Connected at ${PORT}`);
});
