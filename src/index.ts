import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectTodb from "./DataBase/connecToDB";

const app =express() ;
dotenv.config();
app.use(cors());
const PORT = process.env.PORT;
app.get('/' ,(req,res)=>{
     res.send("hellow ")
})
app.listen(PORT, () => {
  connectTodb() ;
  console.log(`Connected at ${PORT}`);
});
