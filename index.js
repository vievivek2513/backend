import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(path.resolve(),"public"))) 

app.set("view engine","ejs");

app.get("/",(req,res)=>{
//   res.render("./index",{name:"vivek" ,age :24});
res.sendFile("index")
})

app.listen(4000,()=>{
    console.log("asdasd")
})