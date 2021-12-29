const { text: String } = require('body-parser')
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    address: {
        city:{
            type:String
        },
        street:{
            type:String
        },
        apartment:{
            type:String
        },
        zipCode:{
            type:String
        }
    },
    email: {
        type: String,
        unique: true
    },
    education: {
        type:Array
    },
    maritalStatus: {
        type: String,
        enum: ['Single', 'married', 'widowed', 'divorced']
    },
    birthDate: {
        type: Date,
    },
    sectoralAffiliation: {
        type: String,
        enum: ['arabic', 'religious', 'ortodox']//need to add more
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other']
    },
    permissions: {
        type: String,
        enum: ['admin', 'editor', 'viewer'],
        default: 'viewer'
    },
    password: {
        type: String,
        default: null
    }

})

module.exports = mongoose.model('user', schema)