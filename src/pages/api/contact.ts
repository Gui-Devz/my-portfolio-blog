// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_TOKEN);

function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(process.env.SENDGRID_TOKEN);

  const pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!pattern.test(req.body.email)) {
    return res.status(203).json({});
  }

  const msg = {
    to: process.env.NEXT_PUBLIC_EMAIL,
    from: process.env.NEXT_PUBLIC_USER,
    subject: `Portfolio message from ${req.body.name}`,
    text: req.body.message,
    html: `
    <div>
      <p>Name: ${req.body.name}</p>
      <p>Email: ${req.body.email}</p>
      <p>Message: ${req.body.message}</p>  
    </div>`,
  };

  (async () => {
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
      return res.status(535).json({});
    }
  })();

  res.status(200).json({});
}

export default handler;
