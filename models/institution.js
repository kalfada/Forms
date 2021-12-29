const mongoose = require('mongoose')
const { stringify } = require('querystring')

const activitiesSchema = new mongoose.Schema({
    name: {
        type: String
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    tags: {
        type: Array
    }
})

const institutionSchema = new mongoose.Schema({
    name: {
        type: String
    },
    contactDetails: {
        address: {
            city: {
                type: String
            },
            street: {
                type: String
            },
            apartment: {
                type: String
            },
            zipCode: {
                type: String
            }
        },
        phone: {
            type: String
        },
        contactName: {
            type: String
        }
    },
    activities: {
        type: [activitiesSchema]
    }
})

module.exports = mongoose.model('institution', institutionSchema)