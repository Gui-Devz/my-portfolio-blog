import { NextApiRequest, NextApiResponse } from "next";

const protectAPI = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (new URL(req.headers.referer).origin !== "http://localhost:3000") {
      return res.status(403).json({ success: false, message: `Forbidden` });
    }
    return handler(req, res);
  };
};

export default protectAPI;
