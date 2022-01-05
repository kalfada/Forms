const pollModel = require('../models/poll')

function read(filter) {
    return pollModel.find(filter)
}

function readOne({ id }) {
    return pollModel.findOne(id).lean()
}

function create(newPoll) {
    newPoll.creationDate = Date.now()
    return pollModel.create(newPoll)
}

function update({ id }, updatedPoll) {
    return pollModel.findByIdAndUpdate(id, updatedPoll, { new: true })
}

function del({ id }) {
    return pollModel.findByIdAndDelete(id)
}

module.exports = { create, read, readOne, update, delete: del }
