const mongoos = require("mongoose");
const imageSchema = new mongoos.Schema({
  name: String,
img:{
    public_id:{
        type: String,
        required: true,
    },
    url:{
        type: String,
        required: true,

    }
}
});

module.exports = mongoos.model("images", imageSchema);