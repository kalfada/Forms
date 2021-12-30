const userModel = require('../models/user')
const bcrypt = require('bcryptjs')

function read(filter) {
    return userModel.find(filter)
}

function create(newUser) {
    newUser.creationDate = Date.now()
    return userModel.create(newUser)
}

function update(id) {

}

function del(id) {

}

module.exports = { create, read, update, delete: del }