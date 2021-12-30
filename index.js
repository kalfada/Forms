require('./db')
const pollModel = require('./models/poll')
const bcrypt = require('bcryptjs')
const req = require('express/lib/request')

function read() {
    return pollModel.find()
}

function create(info) {
    return pollModel.create(info)
}

module.exports = { read, create }