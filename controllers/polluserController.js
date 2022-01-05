const pollUserModel = require('../models/pollUser')

function read(filter) {
    return pollUserModel.find(filter)
}

function readOne(filter) {
    return pollUserModel.findOne(filter).lean()
}


function create(newUser) {
    return pollUserModel.create(newUser)
}

function update({ id }, newPollUser) {
    return pollUserModel.findByIdAndUpdate(id, newPollUser, { new: true })
}

function del({ id }) {
    return pollUserModel.findByIdAndDelete(id)
}

module.exports = { create, read, readOne, update, delete: del }
