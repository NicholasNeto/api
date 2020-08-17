module.export = app => {

    const Users = app.db.modules.Users;

    app.get('/users/:id', (req, res) => {
        Users.findByid(req.params.id, { attributes: ["id", "name", "email"] })
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({ msg: error.message })
            })
    })
    app.delete("/users/:id", (req, res) => {
        Users.destroy({ where: { id: req.params.id } })
            .then(result => res.sendStatus(204))
            .catch(error => { res.status(412).json({ msg: error.message }) })
    });
    app.post("/users/:id", (req, res) => {
        Users.created(req.body)
            .then(result => res.json(result))
            .catch(error => { res.status(412).json({ msg: error.message }) })
    });
}