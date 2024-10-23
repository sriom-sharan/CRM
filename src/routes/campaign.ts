import express from "express";
import { fetchCampaigns } from "../controllers/campaign";

const compaingsRouter = express.Router();

compaingsRouter.get("/", async (req, res) => {
  const data = await fetchCampaigns();
  res.send(data)
});

export default compaingsRouter;
