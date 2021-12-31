const institutionModel = require('../models/institution')

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