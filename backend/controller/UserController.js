const UserEntity = require('../model/UserEntity')
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

module.exports = {

    create : async (req, res) => {

        await UserEntity.findOne({ email: req.body.email })
        .exec()
        .then( user => {

            if(user.email === req.body.email)
                return res.status(400).send('Username ' + req.body.email + ' is already taken')
            else{
                const addUser = new UserEntity({
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10)
                })

                addUser.save()

                res.status(200).json("OK");
            }
        })
    },

    authenticate : (req, res) => {

        UserEntity.findOne({ email : req.body.email })
        .exec()
        .then( user => {
            if (user && bcrypt.compareSync(req.body.password, user.password)) {

                jwt.sign({ email: user.email }, 'secretKey', (err, token) => {
                    res.status(200).json(token);
                })
            }
            else{
                res.status(404).send("User not found")
            }
        })
    }
}