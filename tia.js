const express = require("express");
const app = express();
const bodyparser=reqire("body-parser");

app.get("/",(reg,res)=>{
res.send('hello Frederick')
});

app.post ("/user",(reg,res)=>{
    res.send({name:John });
});

app.listen(3001,()=>{
    console.log("sever is runing on port 3000");
});
