const polluserModel = require('../models/pollUser')

function read(filter) {
    return polluserModel.find(filter)
}

function create(newUser) {
    return polluserModel.create(newUser)
}

function update(id) {

}

function del(id) {

}

module.exports = { create, read, update, delete: del }