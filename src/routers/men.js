const express=require("express");
const router=new express.Router();
const MensRanking=require("../models/mens");


//GET METHOD

router.get("/",(req,res)=>
{
    res.send("Hello welcome to cricket api");
})



router.get("/mens",async (req,res)=>
{
    try{
        const getMens=await MensRanking.find({});
       // console.log(addRecord);
        res.send(getMens);
    }catch(e)
    {
        console.log(e);
    }
})


//GET METHOD BY ID

router.get("/mens/:id",async (req,res)=>
{
    try{
        const _id=req.params.id;
        const getMens=await MensRanking.find({_id});
       // console.log(addRecord);
        res.send(getMens);
    }catch(e)
    {
        console.log(e);
    }
})



//POST METHOD

router.post("/mens",async (req,res)=>
{
    try{

        const addRecord=await new MensRanking(req.body);
       // console.log(addRecord);
        addRecord.save();
        res.status(201).send(addRecord);
    }catch(e)
    {
        console.log(e);
    }
});


module.exports=router;