const offer_mongoose = require("mongoose");
const offerSchema = new offer_mongoose.Schema({
  imgPath: String,
  
});

module.exports = offer_mongoose.model("offers", offerSchema);