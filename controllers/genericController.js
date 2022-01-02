require('../db')

const pollUser = require('./polluserController')
const poll = require('./pollController')
const user = require('./userController')
let pollOne, userOne, pollUserOne;

async function init() {
    pollOne = await poll.read();
    userOne = await user.read();
    pollUserOne = await pollUser.read()
}

init().then(() => {
    console.log('POLL\n' + pollOne.questions);
    console.log('USER\n' +userOne);
    console.log('POLLUSER\n' +pollUserOne);
})
