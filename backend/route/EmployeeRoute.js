const express = require('express')
const router = express.Router()

const employeeController = require('../controller/EmployeeController')
const authorization = require('../middleware/authorization')

router.get('/getAllEmployees', authorization.authorize, employeeController.getAllEmployees)
router.get('/getEmployeeByName/:name', authorization.authorize, employeeController.getEmployeeByName)
router.get('/getEmployeesAndTheProjects/:name', authorization.authorize, employeeController.getEmployeesAndTheProjects)
router.post('/save', authorization.authorize, employeeController.insertNewEmployee)
router.put('/change/:id', authorization.authorize, employeeController.changeFieldOfEmployee)
router.delete('/delete/:id', authorization.authorize, employeeController.deleteEmployee)

module.exports = router