const express=require("express");
const mongoose=require("mongoose");
mongoose.set('strictQuery', true);

const MensRanking=require("../src/models/mens");
const router = require("./routers/men");

const app=express();
const port=process.env.PORT || 3000;
require("../src/db/conn");

app.use(express.json());


app.listen(port,()=>
{
    console.log("connection is live at port no ",port);
});
app.use(router);