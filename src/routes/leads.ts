import express from "express";
const dummyData = require('../mockdata/leads.json');

const leadsRouter = express.Router();

leadsRouter.get('/',(req,res)=>{
    res.json(dummyData)
})

export default leadsRouter;