const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let tennisSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        },
  slotDate: {
    type: Date,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});

let swimmingSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        },
  slotDate: {
    type: Date,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});

let cycleSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        },
  slotDate: {
    type: Date,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});

let badmintonSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        },
  slotDate: {
    type: Date,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});

let gymSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        },
  slotDate: {
    type: Date,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});


let clubSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        },
  slotDate: {
    type: Date,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});



let Tennis = mongoose.model("Tennis", tennisSchema);
module.exports = Tennis;

let Cycle = mongoose.model("Cycle", cycleSchema);
module.exports = Cycle;

let Swimming = mongoose.model("Swimming", swimmingSchema);
module.exports = Swimming;

let Badminton = mongoose.model("Badminton", badmintonSchema);
module.exports = Badminton;

let Gym = mongoose.model("Gym", gymSchema);
module.exports = Gym;

let Club = mongoose.model("Club", clubSchema);
module.exports = Club;
