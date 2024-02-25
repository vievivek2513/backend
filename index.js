const http = require("http");

 const server=http.createServer((req,res)=>{
    res.end("<h1>Kyu bhai</h1>")
})

server.listen(4000,()=>{
    console.log("second")
})