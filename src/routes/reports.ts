import express from "express";
import { generatePDFReport } from "../utils/generateReport";
import { fetchLeads } from "../controllers/leads";
import { sendEmailWithPDF } from "../utils/sendMail";
import { etlProcess } from "../services/etlProcess";

const recordRouter = express.Router();

recordRouter.get("/", async (req, res) => {
  const  toEmail  = req.body.toEmail;
  if(!toEmail){
    res.send('Email ID required')
  }
  const leads = await fetchLeads();
  const elt =  await etlProcess()
  console.log(elt);
  const path = await generatePDFReport(leads);
  const response = await sendEmailWithPDF(
    toEmail,
    "Report",
    "Lead Report",
    path
  );

  res.send(response);
});

export default recordRouter;
