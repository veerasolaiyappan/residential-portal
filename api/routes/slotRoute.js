const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const slotController = require("../controllers/slotController");


router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, OPTIONS, GET, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, X-Access-Token, X-Key, Authorization"
  );
  next();
});


router.post("/tennis", (req, res, next) => {
    slotController.registerTennis(req.body, (err, status, data) => {
        if (err) {
        res.status(status).send({ err: err, data: null });
        } else {
        res.status(200).send({ err: null, data });
        }
    });
});

router.get("/tennis", (req, res) => {
  slotController.fetchAllTennisUsers(
    (err, status, data) => {
      if (err) {
        res.status(status).send({ err: err, data: null });
      } else {
        res.status(200).send({ data });
      }
    }
  );
});




  router.post("/swimming", (req, res, next) => {
    slotController.registerSwimming(req.body, (err, status, data) => {
      if (err) {
        res.status(status).send({ err: err, data: null });
      } else {
        res.status(200).send({ err: null, data });
      }
    });
  });

  router.get("/swimming", (req, res) => {
    slotController.fetchAllSwimmingUsers(
      (err, status, data) => {
        if (err) {
          res.status(status).send({ err: err, data: null });
        } else {
          res.status(200).send({ data });
        }
      }
    );
  });

  router.post("/cycle", (req, res, next) => {
    slotController.registerCycle(req.body, (err, status, data) => {
      if (err) {
        res.status(status).send({ err: err, data: null });
      } else {
        res.status(200).send({ err: null, data });
      }
    });
  });

  router.get("/cycle", (req, res) => {
    slotController.fetchAllCycleUsers(
      (err, status, data) => {
        if (err) {
          res.status(status).send({ err: err, data: null });
        } else {
          res.status(200).send({ data });
        }
      }
    );
  });

  router.post("/badminton", (req, res, next) => {
    slotController.registerBadminton(req.body, (err, status, data) => {
      if (err) {
        res.status(status).send({ err: err, data: null });
      } else {
        res.status(200).send({ err: null, data });
      }
    });
  });

  router.get("/badminton", (req, res) => {
    slotController.fetchAllBadmintonUsers(
      (err, status, data) => {
        if (err) {
          res.status(status).send({ err: err, data: null });
        } else {
          res.status(200).send({ data });
        }
      }
    );
  });

  router.post("/gym", (req, res, next) => {
    slotController.registerGym(req.body, (err, status, data) => {
      if (err) {
        res.status(status).send({ err: err, data: null });
      } else {
        res.status(200).send({ err: null, data });
      }
    });
  });

  router.get("/gym", (req, res) => {
    slotController.fetchAllGymUsers(
      (err, status, data) => {
        if (err) {
          res.status(status).send({ err: err, data: null });
        } else {
          res.status(200).send({ data });
        }
      }
    );
  });

  router.post("/club", (req, res, next) => {
    slotController.registerClub(req.body, (err, status, data) => {
      if (err) {
        res.status(status).send({ err: err, data: null });
      } else {
        res.status(200).send({ err: null, data });
      }
    });
  });

  router.get("/club", (req, res) => {
    slotController.fetchAllClubUsers(
      (err, status, data) => {
        if (err) {
          res.status(status).send({ err: err, data: null });
        } else {
          res.status(200).send({ data });
        }
      }
    );
  });
  


module.exports = router;
