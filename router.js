const polls = require('./index')

module.exports = app => {
    app.get('/polls', async (req, res) => {
        try {
            res.send(await polls.read())
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),
    app.post('/polls', async (req, res) => {
        try {
            res.send(await polls.create(req.body))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),
    app.put('/polls', async (req, res) => {
        try {
            res.send(await polls.update(req.body))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),
    app.delete('/polls', async (req, res) => {
        try {
            res.send(await polls.read())
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    })

}