const mongoose = require("mongoose");
const imageSchema = new mongoose.Schema({
  imgPath: String,
  title:String
});

module.exports = mongoose.model("imgarray", imageSchema);