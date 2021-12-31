require('./db')
const polls = require('./controllers/pollController')
const users = require('./controllers/userController')

module.exports = {polls, users}