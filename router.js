const {polls, users, pollUsers, institutions, generic} = require('./index')

module.exports = app => {

    //poll CRUD
    app.get('/polls', async (req, res) => {
        try {
            res.send(await polls.read(req.query))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),
    app.get('/polls/:id', async (req, res) => {
        try {
            res.send(await polls.read(req.params))
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
    app.delete('/polls/:id', async (req, res) => {
        try {
            res.send(await polls.delete(req.params))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),

    //user CRUD
    app.get('/users', async (req, res) => {
        try {
            res.send(await users.read(req.query))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),
    app.get('/users/:id', async (req, res) => {
        try {
            res.send(await users.read(req.params))
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
    app.delete('/users/:id', async (req, res) => {
        try {
            res.send(await users.delete(req.params))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),
    app.post('/users/login', async (req, res) => {
        try {
            res.send(await users.login(req.body))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),

    //polluser CRUD
    app.get('/pollusers', async (req, res) => {
        try {
            res.send(await pollUsers.read(req.query))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),
    app.get('/pollusers/:id', async (req, res) => {
        try {
            res.send(await pollUsers.read(req.params))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),
    app.post('/pollusers', async (req, res) => {
        try {
            res.send(await pollUsers.create(req.body))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),
    app.put('/pollusers/:id', async (req, res) => {
        try {
            res.send(await pollUsers.update(req.params, req.body))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),
    app.delete('/pollusers/:id', async (req, res) => {
        try {
            res.send(await pollUsers.delete(req.params))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),

    //institutions CRUD
    app.get('/institutions', async (req, res) => {
        try {
            res.send(await institutions.read(req.query))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),
    app.get('/institutions/:id', async (req, res) => {
        try {
            res.send(await institutions.read(req.params))
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
    app.delete('/institutions/:id', async (req, res) => {
        try {
            res.send(await institutions.delete(req.params))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    })
    //generic Get
    app.get('/uniquePoll', async (req, res)=>{
        try {
            res.send(await generic.createUniquePoll(req.body))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    })
}