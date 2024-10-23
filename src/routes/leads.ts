import axios from "axios";
import express from "express";
import { fetchLeads } from "../controllers/leads";

const leadsRouter = express.Router();

leadsRouter.get("/", async (req, res) => {
  const data = await fetchLeads();
  res.send(data)
});

export default leadsRouter;
