import { etlProcess } from "../services/etlProcess";

const nodemailer = require("nodemailer");
const path = require("path");

export const sendEmailWithPDF = async (
  toEmail: string,
  subject: string,
  text: string,
  pdfFilePath: unknown
) => {

  
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
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    return error
  }
};
