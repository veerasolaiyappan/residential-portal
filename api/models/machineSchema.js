const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let machineSchema = new Schema({
  network: {
    type: Schema.Types.ObjectId,
    ref: "Network",
  },
  machineName: {
    type: String,
    required: true,
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
  },
  systemInformation: {
    manufacturer: {
      type: String,
    },
    productName: {
      type: String,
    },
    systemVersion: {
      type: String,
    },
    systemSerialNumber: {
      type: String,
    },
  },
  chassis: {
    chassisManufacturer: {
      type: String,
    },
    chassisType: {
      type: String,
    },
    chassisVersion: {
      type: String,
    },
    chassisSerialNumber: {
      type: String,
    },
  },
  networkInformation: {
    ipV4Address: {
      type: String,
    },
    ipV6Address: {
      type: String,
    },
    subnetMask: {
      type: String,
    },
    defaultGateway: {
      type: String,
    },
    macAddress: {
      type: String,
    },
    dhcpAddress: {
      type: String,
    },
    dnsServer: {
      type: String,
    },
  },
  motherBoard: {
    motherBoardManufacturer: {
      type: String,
    },
    motherBoardProduct: {
      type: String,
    },
    motherBoardVersion: {
      type: String,
    },
    motherBoardSerialNumber: {
      type: String,
    },
  },
  biosInformation: {
    vendor: {
      type: String,
    },
    version: {
      type: String,
    },
    releaseDate: {
      type: String,
    },
  },
  cpuInformation: {
    processorManufacturer: {
      type: String,
    },
    processorFamily: {
      type: String,
    },
    processorVersion: {
      type: String,
    },
    cpuMaxSpeed: {
      type: String,
    },
    cpuCurrentSpeed: {
      type: String,
    },
    cpu: {
      type: String,
    },
    quantity: {
      type: String,
    },
    speed: {
      type: String,
    },
    ram: {
      type: String,
    },
    maxMemorySize: {
      type: String,
    },
    maxMemorySlots: {
      type: String,
    },
  },
});

let Machine = mongoose.model("Machine", machineSchema);
module.exports = Machine;
