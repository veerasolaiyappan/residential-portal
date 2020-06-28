const mongoose = require("mongoose");
const Tennis = require("../models/tennisSchema");
const Swimming = require("../models/swimmingSchema");
const Gym = require("../models/gymSchema");
const Cycle = require("../models/cycleSchema");
const Club = require("../models/clubSchema");
const Badminton = require("../models/badmintonSchema");


const registerTennis = (data, callback) => {
    Tennis.findOne({ slotDate: data.date }, (err, user) => {
      
      if (err) return callback(err, 500, null);
      else {
        if (user) {
          return callback("Slot is Already Booked", 400, null);
        } else {
          // console.log(data.userId);
            let newUser = new Tennis({
                name: data.name,
                slotDate: data.date,
                user: data.userId,
                createdOn: Date.now(),
              });
              newUser
                .save()
                .then((success) => {
                  return callback(null, 200, "Slot is Booked");
                })
                .catch((err) => {
                  console.log(err);
                });
        }
      }
    });
  };

  const fetchAllTennisUsers = (callback) => {
    Tennis.find({})
      .populate("Users")
      .exec(function (err, users) {
        if (err) return callback(err, 500, null);
        else {
          Tennis.count({}, (err, total) => {
            if (err) return callback(err, 500, null);
            else {
              let data = { users: users, totalUsers: total };
              return callback(null, 200, data);
            }
          });
        }
      });
  };



  const registerCycle = (data, callback) => {
    Cycle.findOne({ slotDate: data.date }, (err, user) => {
      if (err) return callback(err, 500, null);
      else {
        if (user) {
          return callback("Slot is Already Booked", 400, null);
        } else {    
            let newUser = new Cycle({
                name: data.name,
                slotDate: data.date,
                user: data.userId,
                createdOn: Date.now(),
              });
              newUser
                .save()
                .then((success) => {
                  return callback(null, 200, "Slot is Booked");
                })
                .catch((err) => {
                  console.log(err);
                });
        }
      }
    });
  };

  const fetchAllCycleUsers = (callback) => {
    Cycle.find({})
      .populate("Users")
      .exec(function (err, users) {
        if (err) return callback(err, 500, null);
        else {
          Cycle.count({}, (err, total) => {
            if (err) return callback(err, 500, null);
            else {
              let data = { users: users, totalUsers: total };
              return callback(null, 200, data);
            }
          });
        }
      });
  };

  const registerSwimming = (data, callback) => {
    Swimming.findOne({ slotDate: data.date }, (err, user) => {
      if (err) return callback(err, 500, null);
      else {
        if (user) {
          return callback("Slot is Already Booked", 400, null);
        } else {    
            let newUser = new Swimming({
                name: data.name,
                slotDate: data.date,
                user: data.userId,
                createdOn: Date.now(),
              });
              newUser
                .save()
                .then((success) => {
                  return callback(null, 200, "Slot is Booked");
                })
                .catch((err) => {
                  console.log(err);
                });
        }
      }
    });
  };

  const fetchAllSwimmingUsers = (callback) => {
    Swimming.find({})
      .populate("Users")
      .exec(function (err, users) {
        if (err) return callback(err, 500, null);
        else {
          Swimming.count({}, (err, total) => {
            if (err) return callback(err, 500, null);
            else {
              let data = { users: users, totalUsers: total };
              return callback(null, 200, data);
            }
          });
        }
      });
  };

  const registerBadminton = (data, callback) => {
    Badminton.findOne({ slotDate: data.date }, (err, user) => {
      if (err) return callback(err, 500, null);
      else {
        if (user) {
          return callback("Slot is Already Booked", 400, null);
        } else {    
            let newUser = new Badminton({
                name: data.name,
                slotDate: data.date,
                user: data.userId,
                createdOn: Date.now(),
              });
              newUser
                .save()
                .then((success) => {
                  return callback(null, 200, "Slot is Booked");
                })
                .catch((err) => {
                  console.log(err);
                });
        }
      }
    });
  };

  const fetchAllBadmintonUsers = (callback) => {
    Badminton.find({})
      .populate("Users")
      .exec(function (err, users) {
        if (err) return callback(err, 500, null);
        else {
          Badminton.count({}, (err, total) => {
            if (err) return callback(err, 500, null);
            else {
              let data = { users: users, totalUsers: total };
              return callback(null, 200, data);
            }
          });
        }
      });
  };

  const registerGym = (data, callback) => {
    Gym.findOne({ slotDate: data.date }, (err, user) => {
      if (err) return callback(err, 500, null);
      else {
        if (user) {
          return callback("Slot is Already Booked", 400, null);
        } else {    
            let newUser = new Gym({
                name: data.name,
                slotDate: data.date,
                user: data.userId,
                createdOn: Date.now(),
              });
              newUser
                .save()
                .then((success) => {
                  return callback(null, 200, "Slot is Booked");
                })
                .catch((err) => {
                  console.log(err);
                });
        }
      }
    });
  };

  const fetchAllGymUsers = (callback) => {
    Gym.find({})
      .populate("Users")
      .exec(function (err, users) {
        if (err) return callback(err, 500, null);
        else {
          Gym.count({}, (err, total) => {
            if (err) return callback(err, 500, null);
            else {
              let data = { users: users, totalUsers: total };
              return callback(null, 200, data);
            }
          });
        }
      });
  };

  const registerClub = (data, callback) => {
    Club.findOne({ slotDate: data.date }, (err, user) => {
      if (err) return callback(err, 500, null);
      else {
        if (user) {
          return callback("Slot is Already Booked", 400, null);
        } else {    
            let newUser = new Club({
                name: data.name,
                slotDate: data.date,
                user: data.userId,
                createdOn: Date.now(),
              });
              newUser
                .save()
                .then((success) => {
                  return callback(null, 200, "Slot is Booked");
                })
                .catch((err) => {
                  console.log(err);
                });
        }
      }
    });
  };

  const fetchAllClubUsers = (callback) => {
    Club.find({})
      .populate("Users")
      .exec(function (err, users) {
        if (err) return callback(err, 500, null);
        else {
          Club.count({}, (err, total) => {
            if (err) return callback(err, 500, null);
            else {
              let data = { users: users, totalUsers: total };
              return callback(null, 200, data);
            }
          });
        }
      });
  };

module.exports = {
    registerTennis,
    registerCycle,
    registerBadminton,
    registerClub,
    registerSwimming,
    registerGym,
    fetchAllTennisUsers,
    fetchAllBadmintonUsers,
    fetchAllClubUsers,
    fetchAllCycleUsers,
    fetchAllGymUsers,
    fetchAllSwimmingUsers
};
