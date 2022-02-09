const express = require('express')
const router = express.Router()

const controller = require('../controller/EmployeeController')

router.get('/', controller.getEmployees)

module.exports = router