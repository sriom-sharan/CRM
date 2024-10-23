"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const CampaignSchema = new Schema({
    name: { type: String, required: true },
    platform: { type: String, required: true }, // e.g., "Google", "Facebook", etc.
    status: { type: String, enum: ['pending', 'ongoing', 'success', 'failed'], default: 'pending' },
    budget: { type: Number, required: true },
    spent: { type: Number, default: 0 },
    leadsGenerated: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose_1.default.model('Campaign', CampaignSchema);
