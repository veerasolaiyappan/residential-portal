const mongoose = require('mongoose')
const Machine = require('./../models/machineSchema')

//fetch all machines /machine/fetch/:customer/:paginate
const getAllMachines = (customer, paginate, callback) => {
    Machine.find({ customer })
    .limit(12)
    .skip(12 * (paginate - 1))
    .exec(function (err, machines) {
        if(err) {
            return callback(err, 500, null)
        }
        else {
            Machine.count({ customer }, (err, count) => {
                if(err) {
                    return callback(err, 500, null)
                }
                else {
                    let data = { totalCount : count, machines : machines }
                    return callback(null, 200, data)
                }
            })
        }
    })
}

const getMachineByName = (machineName, callback) => {
    Machine.findOne({ machineName })
    .exec(function (err, machine) {
        if(err) {
            return callback(err, 500, null)
        }
        else {
            return callback(null, 200, machine)
        }
    })
}

module.exports = { getAllMachines,
                   getMachineByName }