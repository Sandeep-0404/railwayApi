const express= require("express");
const mongoose=require("mongoose");

const menSchema=new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name :{
        type:String,
        required:true,
        trim:true
    },
    team:{
        type:String,
        required:true,
        trim:true
    },
    rating:{
        type:Number,
        required:true,
        trim:true
    },
    event:{
        type:String,
        default:"Cricket"
    }
});

// we are creating a new collection
const MensRanking = new mongoose.model("MenRanking",menSchema);

module.exports=MensRanking;