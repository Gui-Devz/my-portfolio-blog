import nodemailer from "nodemailer";

export default nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.NEXT_PUBLIC_USER,
    pass: process.env.NEXT_PUBLIC_PASSWORD,
  },
  secure: true,
});
