import mongoose from "../db";

const Schema = mongoose.Schema;

const ReportSchema = new Schema({
  totalLeads: { type: Number, required: true },
  successfulCampaigns: { type: Number, required: true },
  totalCampaigns: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const ReportModel = mongoose.model("Report", ReportSchema);
