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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const generateReport_1 = require("../utils/generateReport");
const leads_1 = require("../controllers/leads");
const sendMail_1 = require("../utils/sendMail");
const etlProcess_1 = require("../services/etlProcess");
const recordRouter = express_1.default.Router();
recordRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const toEmail = req.body.toEmail;
    if (!toEmail) {
        res.send('Email ID required');
    }
    const leads = yield (0, leads_1.fetchLeads)();
    const elt = yield (0, etlProcess_1.etlProcess)();
    console.log(elt);
    const path = yield (0, generateReport_1.generatePDFReport)(leads);
    const response = yield (0, sendMail_1.sendEmailWithPDF)(toEmail, "Report", "Lead Report", path);
    res.send(response);
}));
exports.default = recordRouter;
