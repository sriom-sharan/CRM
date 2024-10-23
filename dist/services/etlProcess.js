"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.etlProcess = etlProcess;
const campaign_1 = require("../controllers/campaign");
const leads_1 = require("../controllers/leads");
const report_1 = require("../models/report");
function etlProcess() {
    return __awaiter(this, void 0, void 0, function* () {
        const leads = yield (0, leads_1.fetchLeads)();
        const campaigns = yield (0, campaign_1.fetchCampaigns)();
        // Transform: compute metrics
        const totalLeads = leads.length;
        const successfulCampaigns = campaigns.filter((campaign) => campaign.status === "success").length;
        // Load: save metrics into the database
        try {
            const report = yield report_1.ReportModel.insertMany({
                totalLeads,
                successfulCampaigns,
                totalCampaigns: totalLeads + successfulCampaigns,
            });
            console.log("Report saved successfully");
        }
        catch (error) {
            console.error("Error saving report:", error);
        }
    });
}
``;
