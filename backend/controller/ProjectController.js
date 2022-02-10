const ProjectEntity = require('../model/ProjectEntity')

module.exports = {

    getAllProjects : (req, res) => {
        ProjectEntity.find({}).then((result) => {
            res.send(result)
        }).catch((err) => {
            alert(err)
        })
    },
    
    getProjectByName : (req, res) => {
        ProjectEntity.find({Name : req.params.name}).then((result) => {
            res.send(result)
        }).catch((err) => {
            alert(err)
        })
    },

    insertNewProject : async (req, res) => {

        const saveNewProject = await new ProjectEntity(req.body).save()

        res.json(saveNewProject)
    },

    changeFieldOfProject : (req, res) => {
        ProjectEntity.findByIdAndUpdate({_id : req.params.id}, req.body).then((result) => {
            res.send(result)
        }).catch((err) => {
            alert(err)
        })
    },

    deleteProject : async (req, res) => {
        const result = await ProjectEntity.findByIdAndDelete({ _id : req.params.id })
        res.json(result)
    }

}