const {polls, users, pollusers, institutions} = require('./index')

module.exports = app => {

    //poll CRUD
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
    app.put('/polls/:id', async (req, res) => {
        try {
            res.send(await polls.update(req.params, req.body))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),
    app.delete('/polls', async (req, res) => {
        try {
            res.send(await polls.delete(req.body))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),

    //user CRUD
    app.get('/users', async (req, res) => {
        try {
            res.send(await users.read())
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),
    app.post('/users', async (req, res) => {
        try {
            res.send(await users.create(req.body))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),
    app.put('/users/:id', async (req, res) => {
        try {
            res.send(await users.update(req.params, req.body))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),
    app.delete('/users', async (req, res) => {
        try {
            res.send(await users.delete(req.body))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),

    //polluser CRUD
    app.get('/pollusers', async (req, res) => {
        try {
            res.send(await pollusers.read())
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),
    app.post('/pollusers', async (req, res) => {
        try {
            res.send(await pollusers.create(req.body))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),
    app.put('/pollusers/:id', async (req, res) => {
        try {
            res.send(await pollusers.update(req.params, req.body))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),
    app.delete('/pollusers', async (req, res) => {
        try {
            res.send(await pollusers.delete(req.body))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),

    //institutions CRUD
    app.get('/institutions', async (req, res) => {
        try {
            res.send(await institutions.read())
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),
    app.post('/institutions', async (req, res) => {
        try {
            res.send(await institutions.create(req.body))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),
    app.put('/institutions/:id', async (req, res) => {
        try {
            res.send(await institutions.update(req.params, req.body))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),
    app.delete('/institutions', async (req, res) => {
        try {
            res.send(await institutions.delete(req.body))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    })

}