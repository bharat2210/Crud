import { NextApiRequest, NextApiResponse } from "next";

const products = require("../../../backend/db/products");
require("../../../backend/db/config");

const handler = async (req:NextApiRequest, res:NextApiResponse) => {
  if (req.method === "PUT") {
    try {
      const { id } = req.query;
      const {
        title,
        price,
        img,
        quantity,
        description,
        rating,
        size,
        full,
        color,
        storage,
        ribbon,
        stock,
        category,
      } = req.body;
      let data = await products.findOneAndUpdate(
        { _id: id },
        {
          title,
          price,
          img,
          quantity,
          description,
          rating,
          size,
          full,
          color,
          storage,
          ribbon,
          stock,
          category,
        },
        { new: true }
      );
      res.status(200).send(data);
    } catch (error) {
      res.status(500).json({ message: "Error updating product" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
export default handler;
