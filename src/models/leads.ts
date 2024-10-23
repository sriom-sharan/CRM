import mongoose from "mongoose";
const Schema = mongoose.Schema;

const LeadSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  source: { type: String }, // e.g., "Google Ads", "Facebook", etc.
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Lead', LeadSchema);
