import { NextApiRequest, NextApiResponse } from "next";

const demo = require("../../../backend/db/demomodel");
require("../../../backend/db/config");

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const data =  new demo(req.body);
      let result = await data.save();
      result = result.toObject();
      res.status(200).send(result);
    } catch (err) {
      res.status(500).json({ message: "Error creating user" });
    }
  }else{
    res.status(405).json({message:"Method not allowed"})
  }
};
export default handler;
