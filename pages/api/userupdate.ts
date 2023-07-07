import { NextApiRequest, NextApiResponse } from "next";

const users=require('../../../backend/db/user')
require("../../../backend/db/config")

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method === 'PUT') {
    try {
      const { id } = req.query;
      const { name, email, password } = req.body;

      // Perform the update operation using the `users` model or schema
      let data = await users.findOneAndUpdate(
        { _id: id },
        { name, email, password },
        { new: true }
      );

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error updating user' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
