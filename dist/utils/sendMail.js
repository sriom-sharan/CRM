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
exports.sendEmailWithPDF = void 0;
const nodemailer = require("nodemailer");
const path = require("path");
const sendEmailWithPDF = (toEmail, subject, text, pdfFilePath) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS,
            },
        });
        // Email options
        let mailOptions = {
            from: "ezy.tech@gmail.com",
            to: toEmail,
            subject: subject,
            text: text,
            attachments: [
                {
                    filename: "report.pdf",
                    path: pdfFilePath, // path of the PDF file
                },
            ],
        };
        // Send email
        let info = yield transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);
        return info;
    }
    catch (error) {
        console.error("Error sending email:", error);
        return error;
    }
});
exports.sendEmailWithPDF = sendEmailWithPDF;
