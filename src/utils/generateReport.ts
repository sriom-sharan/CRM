import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

export const generatePDFReport = (data: any) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    
    // Ensure the path is absolute and points to the right location
    const outputPath = path.resolve(__dirname, "../utils/report.pdf");

    // Create a write stream to save the PDF
    const writeStream = fs.createWriteStream(outputPath);

    // Pipe the PDF content to the write stream
    doc.pipe(writeStream);

    // Add content to the PDF
    doc.fontSize(18).text("Lead Report", { align: "center" });
    doc.moveDown();

    data.forEach((item: any, index: number) => {
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
