const express = require('express')
const router = express.Router()

const projectController = require('../controller/ProjectController')
const authorization = require('../middleware/authorization')

router.get('/getAllProjects', authorization.authorize, projectController.getAllProjects)
router.get('/getProjectByName/:name', authorization.authorize, projectController.getProjectByName)
router.post('/save', authorization.authorize, projectController.insertNewProject)
router.put('/change/:id', authorization.authorize, projectController.changeFieldOfProject)
router.delete('/delete/:id', authorization.authorize, projectController.deleteProject)

module.exports = router