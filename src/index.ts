import express from "express";
import cors from "cors";
import helmet from "helmet";
import compaingsRouter from "./routes/campaign";
import leadsRouter from "./routes/leads";
import recordRouter from "./routes/reports";
const app = express();
require('dotenv').config()
const port = process.env.PORT || 8001 as number;

app.use(cors());
app.use(helmet());
app.use(express.json())

app.use("/api/leads", leadsRouter);
app.use("/api/campaigns", compaingsRouter);
app.use("/api/reports", recordRouter);
app.listen(port, () => {
  console.log("Server running at localhost:",port);
});
