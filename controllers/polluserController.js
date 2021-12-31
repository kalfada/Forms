const pollUserModel = require('../models/pollUser')

function read(filter) {
    return pollUserModel.find(filter)
}

function create(newUser) {
    return pollUserModel.create(newUser)
}

function update(id) {
    
}

function del(id) {

}

module.exports = { create, read, update, delete: del }