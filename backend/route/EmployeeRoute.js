const express = require('express')
const router = express.Router()

const employeeController = require('../controller/EmployeeController')

router.get('/getAllEmployees', employeeController.getAllEmployees)
router.get('/getEmployeeByName/:name', employeeController.getEmployeeByName)
router.get('/getEmployeesAndTheProjects/:name', employeeController.getEmployeesAndTheProjects)
router.post('/save', employeeController.insertNewEmployee)
router.put('/change/:id', employeeController.changeFieldOfEmployee)
router.delete('/delete/:id', employeeController.deleteEmployee)

module.exports = router