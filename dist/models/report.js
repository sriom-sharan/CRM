"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportModel = void 0;
const db_1 = __importDefault(require("../db"));
const Schema = db_1.default.Schema;
const ReportSchema = new Schema({
    totalLeads: { type: Number, required: true },
    successfulCampaigns: { type: Number, required: true },
    totalCampaigns: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});
exports.ReportModel = db_1.default.model("Report", ReportSchema);
