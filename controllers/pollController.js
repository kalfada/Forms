const pollModel = require('../models/poll')
const bcrypt = require('bcryptjs')

function read(filter) {
    return pollModel.find(filter)
}

function create(newPoll) {
    newPoll.creationDate = Date.now()
    return pollModel.create(newPoll)
}

function update(id) {

}

function del(id) {

}

module.exports = { create, read, update, delete: del }