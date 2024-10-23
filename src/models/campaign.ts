import mongoose from "mongoose";
const Schema = mongoose.Schema;

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

module.exports = mongoose.model('Campaign', CampaignSchema);
