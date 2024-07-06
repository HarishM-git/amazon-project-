const express=require("express");
const app=express();
const path=require("path")
const hbs=require("hbs")
const templatePath=path.join(__dirname,"../templates")
const collection=require("./mongodb")
app.use(express.json())

app.set("view engine","hbs") 
app.set("views",templatePath)

app.get("/",(req,res)=>{
  res.render("login")
})
app.get("/signup",(req,res)=>{
  res.render("signup")
})

app.use(express.urlencoded({extended:false}))

app.post("/signup",async(req,res)=>{
  const data={
    name:req.body.name,
    password:req.body.password
  }
  await collection.insertMany([data])
  res.render("home")
})
app.listen(3000,()=>{
   console.log("port connected")
})