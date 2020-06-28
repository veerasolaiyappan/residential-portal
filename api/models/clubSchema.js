const mongoose = require("mongoose");
let Schema = mongoose.Schema;



let clubSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    },
  name:{
    type: String,
    required: true,
  },
  slotDate: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});



let Club = mongoose.model("Club", clubSchema);
module.exports = Club;