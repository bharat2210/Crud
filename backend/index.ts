// const express = require("express");
// const app = express();
// require("./db/config.ts");
// const cors = require("cors");
// const users = require("./db/user.ts");
// const products = require("./db/products.ts");

// app.use(express.json());
// app.use(cors());

// // Users api starting
// app.post("/register", async (req, res) => {
//   let data = new users(req.body);
//   let result = await data.save();
//   result = result.toObject();
//   res.send(result);
// });
// app.get("/users", async (req, res) => {
//   let data = await users.find({});
//   res.send(data);
// });

// app.put("/update/:id", async (req, res) => {
//   const { id } = req.params;
//   const { name, email, password } = req.body;
//   let data = await users.findOneAndUpdate(
//     { _id: id },
//     { name, email, password },
//     { new: true }
//   );
//   if (!data) {
//     res.status(404).json({ message: "User not found" });
//   }
//   res.send(data);
// });

// app.delete("/delete/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     let data = await users.deleteOne({ _id: id });
//     res.send(data);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });
// // User api end

// // Products api start
// app.post("/create", async (req, res) => {
//   let data = new products(req.body);
//   let result = await data.save();
//   result = result.toObject();
//   res.send(result);
// });
// app.get("/products", async (req, res) => {
//   let data = await products.find({});
//   res.send(data);
// });
// app.delete("/deleteproduct/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     let data = await products.deleteOne({ _id: id });
//     res.send(data);
//   } catch (error) {
//     return error;
//   }
// });
// app.put("/updateproduct/:id", async (req, res) => {
//   const { id } = req.params;
//   const {
//     title,
//     price,
//     img,
//     quantity,
//     description,
//     rating,
//     size,
//     full,
//     color,
//     storage,
//     ribbon,
//     stock,
//     category,
//   } = req.body;
//   let data = await products.findOneAndUpdate(
//     { _id: id },
//     {
//       title,
//       price,
//       img,
//       quantity,
//       description,
//       rating,
//       size,
//       full,
//       color,
//       storage,
//       ribbon,
//       stock,
//       category,
//     },
//     { new: true }
//   );
//   if (!data) {
//     res.status(404).json({ message: "User not found" });
//   }
//   res.send(data);
// });

// // Products api end

// app.listen(4000, () => {
//   console.log("listening  to port 4000");
// });
