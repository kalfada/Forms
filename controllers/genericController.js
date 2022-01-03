require('../db')

const pollUser = require('./polluserController')
const poll = require('./pollController')
const user = require('./userController')

async function createUniquePoll(userID, pollID) {
    let newPollUser = await pollUser.readOne({ userID, pollID })
    let newPoll = await poll.readOne(pollID)
    
    // console.log(newPoll.questions[0].answers);

    for (const answer of newPollUser.answers) {
        const index = newPoll.questions.findIndex(question => String(question._id) == String(answer.questionID))
        let newAnswers = []
        for (const value of answer.answerID) {
            const newAns = newPoll.questions[index].answers.find(element => String(element._id) == String(value))
            if (newAns) {
                // console.log(newAns);
                newAnswers.push(newAns.answer)
            }
        }
        console.log(newAnswers);
        newPoll.questions[index].answers = []
        newPoll.questions[index].answers.push(...newAnswers)
        // newPoll.questions[index].answers.push(...newAnswers)
        // console.log(newPoll.questions[index].answers);
    }
    
    console.log(newPoll.questions[0].answers);
}

createUniquePoll('61d17918aa316ad6fd9dd819', '61d19c74cd41fae5d651a664')


// require('../db')

// const pollUser = require('./polluserController')
// const poll = require('./pollController')
// const user = require('./userController')

// async function createUniquePoll(userID, pollID) {
//     let newPollUser = await pollUser.readOne({ userID, pollID })
//     let newPoll = await poll.readOne(pollID)
    
//     // console.log(newPoll.questions[0].answers);

//     for (const answer of newPollUser.answers) {
//         const index = newPoll.questions.findIndex(question => String(question._id) == String(answer.questionID))
//             newPoll.questions[index].userAnswers = answer.answerID
//             let newAnswers = []
//         // for (const value of answer.answerID) {
//             // newPoll.questions[index].userAnswers = 
//             // const newAns = newPoll.questions[index].answers.find(element => String(element._id) == String(value))
//             // if (newAns) {
//                 // console.log(newAns);
//                 // newAnswers.push(newAns.answer)
//             // }
//         // }
//         console.log(newAnswers);
//         // newPoll.questions[index].answers.push(...newAnswers)
//         // console.log(newPoll.questions[index].answers);
//     }
    
//     console.log(newPoll);
// }

// createUniquePoll('61d17918aa316ad6fd9dd819', '61d19c74cd41fae5d651a664')