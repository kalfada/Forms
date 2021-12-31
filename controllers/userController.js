const userModel = require('../models/user')
const bcrypt = require('bcryptjs')

function read(filter) {
    return userModel.find(filter)
}

function create(newUser) {
    newUser.creationDate = Date.now()
    newUser.password = bcrypt.hashSync(newUser.password)
    return userModel.create(newUser)
}

function update({ id }, updatedUser) {
    return userModel.findByIdAndUpdate(id, updatedUser, { new: true })
}

function del({ id }) {
    return userModel.findByIdAndDelete(id)
}

module.exports = { create, read, update, delete: del }