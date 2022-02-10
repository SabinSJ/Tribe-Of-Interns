const express = require('express')
const router = express.Router()

const projectController = require('../controller/ProjectController')

router.get('/getAllProjects', projectController.getAllProjects)
router.get('/getProjectByName/:name', projectController.getProjectByName)
router.post('/save', projectController.insertNewProject)
router.put('/change/:id', projectController.changeFieldOfProject)
router.delete('/delete/:id', projectController.deleteProject)

module.exports = router