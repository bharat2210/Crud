import { NextApiRequest, NextApiResponse } from "next";

const users = require("../../../backend/db/user");
require("../../../backend/db/config");

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      // Retrieve all users from the database
      const data = await users.find();

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving users" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
export default handler;
