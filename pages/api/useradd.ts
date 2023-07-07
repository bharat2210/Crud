import { NextApiRequest, NextApiResponse } from "next";

const users = require("../../../backend/db/user");
require("../../../backend/db/config");

const handler = async (req:NextApiRequest, res:NextApiResponse) => {
  if (req.method === "POST") {
    try {
      let data = new users(req.body);
      let result = await data.save();
      result = result.toObject();
      res.status(200).send(result);
    } catch (error) {
      res.status(500).json({ message: "Error creating user" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
export default handler;
