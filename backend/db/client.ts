const mongoos = require("mongoose");
const clientSchema = new mongoos.Schema({
  E_name: String,
  E_age: Number,
  E_email: String,
});

module.exports = mongoos.model("clients", clientSchema);
