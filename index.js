require('./db')
const polls = require('./controllers/pollController')
const users = require('./controllers/userController')
const pollUsers = require('./controllers/polluserController')
const institutions = require('./controllers/institutionController')
const generic = require('./controllers/genericController')


module.exports = { polls, users, pollUsers, institutions, generic }