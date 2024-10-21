import express from "express";
const dummyData = require('../mockdata/compaigns.json');

const compaingsRouter = express.Router();

compaingsRouter.get('/',(req,res)=>{
    res.json(dummyData)
})

export default compaingsRouter;