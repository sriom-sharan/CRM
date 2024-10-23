"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePDFReport = void 0;
const pdfkit_1 = __importDefault(require("pdfkit"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const generatePDFReport = (data) => {
    return new Promise((resolve, reject) => {
        const doc = new pdfkit_1.default();
        // Ensure the path is absolute and points to the right location
        const outputPath = path_1.default.resolve(__dirname, "../utils/report.pdf");
        // Create a write stream to save the PDF
        const writeStream = fs_1.default.createWriteStream(outputPath);
        // Pipe the PDF content to the write stream
        doc.pipe(writeStream);
        // Add content to the PDF
        doc.fontSize(18).text("Lead Report", { align: "center" });
        doc.moveDown();
        data.forEach((item, index) => {
            doc.fontSize(12).text(`Lead ${index + 1}`);
            doc.fontSize(10).text(`Name: ${item.name}`);
            doc.text(`Email: ${item.email}`);
            doc.text(`Source: ${item.source}`);
            doc.text(`Phone: ${item.phone}`);
            doc.text(`Created At: ${item.createdAt}`);
            doc.moveDown();
        });
        // Finalize the PDF file
        doc.end();
        // Resolve the promise once the PDF is written successfully
        writeStream.on("finish", () => resolve(outputPath));
        writeStream.on("error", reject);
    });
};
exports.generatePDFReport = generatePDFReport;
