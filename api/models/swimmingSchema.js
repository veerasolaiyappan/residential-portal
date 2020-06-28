const mongoose = require("mongoose");
let Schema = mongoose.Schema;


let swimmingSchema = new Schema({
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



let Swimming = mongoose.model("Swimming", swimmingSchema);
module.exports = Swimming;