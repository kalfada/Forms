const pollUserModel = require('./polluserController')
const pollModel = require('./pollController')

async function createUniquePoll({ userID, pollID }) {
    let pollUser = await pollUserModel.readOne({ userID, pollID })
    let poll = await pollModel.readOne(pollID)

    for (const answer of pollUser.answers) {
        const index = poll.questions.findIndex(question => String(question._id) == String(answer.questionID))
        let newAnswers = []
        for (const value of answer.answerID) {
            const tmp = poll.questions[index].answers.find(element => String(element._id) == String(value))
            if (tmp)
                newAnswers.push(tmp.answer)
        }
        poll.questions[index].answers = []
        poll.questions[index].answers.push(...newAnswers)
    }
    return poll
}

module.exports = { createUniquePoll }