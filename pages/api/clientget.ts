import { NextApiRequest, NextApiResponse } from "next";

const clients = require("../../../backend/db/client");
require("../../../backend/db/config");

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      let data = await clients.find();
      res.status(200).send(data);
    } catch (error) {
        res.status(500).json({message:"Error fetching products"})
    }
  }else{
    res.status(405).json({message:"Method not allowed"})
  }
};
export default handler;
