const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    pollID: {},
    userID: {},
    pollStatus: {
        type: String,
        enum: ['start', 'in progress', 'done']//need to add more
    },
    answers: [{
        questionID: {
            type: String
        },
        answerID: {
            type: Array
        }
    }]
})

module.exports = mongoose.model('pollUser', schema)