const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let customerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  gstin: {
    type: String,
    required: true,
  },
  pan: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});

let Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
