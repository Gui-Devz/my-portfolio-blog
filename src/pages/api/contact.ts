// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import protectAPI from "../../middlewares/protectAPI";

import transporter from "../../services/nodemailer";

function handler(req: NextApiRequest, res: NextApiResponse) {
  const pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!pattern.test(req.body.email)) {
    return res.status(203).json({});
  }
  const mailData = {
    from: process.env.NEXT_PUBLIC_USER,
    to: process.env.NEXT_PUBLIC_EMAIL,
    subject: `Portfolio message from ${req.body.name}`,
    text: req.body.message,
    html: `
    <div>
      <p>Name: ${req.body.name}</p>
      <p>Email: ${req.body.email}</p>
      <p>Message: ${req.body.message}</p>  
    </div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);

      return res.status(535);
    } else {
      console.log(info);
    }
  });

  res.status(200).json({});
}

export default protectAPI(handler);
