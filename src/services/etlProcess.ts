import { fetchCampaigns } from "../controllers/campaign";
import { fetchLeads } from "../controllers/leads";
import { ReportModel } from "../models/report";

export async function etlProcess() {
  const leads = await fetchLeads();
  const campaigns: {
    id: number;
    name: string;
    email: string;
    status: string;
  }[] = await fetchCampaigns();

  // Transform: compute metrics
  const totalLeads: number = leads.length;

  const successfulCampaigns = campaigns.filter(
    (campaign: { status: string }) => campaign.status === "success"
  ).length;

  // Load: save metrics into the database

  try {
    const report = await ReportModel.insertMany({
      totalLeads,
      successfulCampaigns,
      totalCampaigns: totalLeads + successfulCampaigns,
    });
    console.log("Report saved successfully");
  } catch (error) {
    console.error("Error saving report:", error);
  }
}
``;
