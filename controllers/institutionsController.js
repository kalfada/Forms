const institutionModel = require('../models/institution')
const bcrypt = require('bcryptjs')

function read(filter) {
    return institutionModel.find(filter)
}

function create(newInstitution) {
    newInstitution.creationDate = Date.now()
    return institutionModel.create(newInstitution)
}

function update(id) {

}

function del(id) {

}

module.exports = { create, read, update, delete: del }