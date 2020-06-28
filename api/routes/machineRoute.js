const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const machineController = require("../controllers/machineController");
const { authenticate, validateUser } = require("../../config");

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, OPTIONS, GET, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, X-Access-Token, X-Key, Authorization"
  );
  next();
});

//Fetch all machines
router.get('/fetch/:customer/:paginate', authenticate, (req, res) => {
    machineController.getAllMachines(req.params.customer, req.params.paginate, (err, status, data) => {
        if(err) {
            res.status(status).send({ err: err, data: null })
        }
        else {
            res.status(200).send({ err: null, data: data })
        }
    })
})

//Fetch machine by name
router.get('/fetch/:name', authenticate, (req, res) => {
  machineController.getMachineByName(req.params.name, (err, status, data) => {
    if(err) {
      res.status(status).send({ err: err, data: null })
    }
    else {
        res.status(200).send({ err: null, data: data })
    }
  })
})

module.exports = router