const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let cycleSchema = new Schema({
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





let Cycle = mongoose.model("Cycle", cycleSchema);
module.exports = Cycle;