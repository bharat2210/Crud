const mongoose = require("mongoose");
const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
})
module.exports= mongoose.model("people", peopleSchema);