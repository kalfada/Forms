const userModel = require('../models/user')
const bcrypt = require('bcryptjs')

function read(filter) {
    return userModel.find(filter)
}

function readOne({ id }) {
    return userModel.findOne(id)
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

async function login({ email, pass }) {
    const user = await userModel.findOne({ email }, '+password')

    if (!user) throw 'no such user'

    if (!bcrypt.compareSync(pass, user.password))
        throw 'email or password does not match'

    return read({ _id: user.id })
}

module.exports = { create, read, readOne, update, delete: del, login }