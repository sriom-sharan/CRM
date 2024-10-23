"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const campaign_1 = __importDefault(require("./routes/campaign"));
const leads_1 = __importDefault(require("./routes/leads"));
const reports_1 = __importDefault(require("./routes/reports"));
const app = (0, express_1.default)();
require('dotenv').config();
const port = process.env.PORT || 8001;
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use("/api/leads", leads_1.default);
app.use("/api/campaigns", campaign_1.default);
app.use("/api/reports", reports_1.default);
app.listen(port, () => {
    console.log("Server running at localhost:", port);
});
