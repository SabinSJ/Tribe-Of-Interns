const express = require('express')
const router = express.Router()

const UserController = require('../controller/UserController')

router.post('/signup', UserController.create)

router.post('/login', UserController.authenticate)

module.exports = router