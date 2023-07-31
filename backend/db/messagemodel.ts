const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  message:String,
  date: String
});

module.exports = mongoose.model("messages", messageSchema);