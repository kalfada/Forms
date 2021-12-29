const mongoose = require('mongoose')

const answerSchema = new mongoose.Schema({
    answer: {
        id: {
            type:String,
            unique:true
        },
        type: String,
        required: true
    }
})

const questionSchema = new mongoose.Schema({
    name: {},
    questionType: {},
    answersNum: {},
    order: {},
    isrequired: {},
    image: {},
    answers: [answerSchema]
})

const pollSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    creationDate: {
        type: Date
    },
    author: {
        type: String
    },
    designSettings: {},
    shareLink: {},
    question: {
        type: [questionSchema]
    }
})

module.exports = mongoose.model('poll', pollSchema)