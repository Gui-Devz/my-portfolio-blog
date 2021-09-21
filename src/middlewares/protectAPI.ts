import { NextApiRequest, NextApiResponse } from "next";

const protectAPI = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (
      new URL(req.headers.referer).origin !== "https://guizagari.vercel.app/"
    ) {
      return res.status(403).json({ success: false, message: `Forbidden` });
    }
    return handler(req, res);
  };
};

export default protectAPI;
