const EmployeeEntity = require('../model/EmployeeEntity')

module.exports = {

    getAllEmployees : (req, res) => {
        EmployeeEntity.find({}).then((result) => {
            res.send(result)
        }).catch((err) => {
            alert(err)
        })
    },
    
    getEmployeeByName : (req, res) => {
        EmployeeEntity.find({Name : req.params.name}).then((result) => {
            res.send(result)
        }).catch((err) => {
            alert(err)
        })
    },

    getEmployeesAndTheProjects: (req, res) => {

        EmployeeEntity.aggregate([
            {
                $match: {
                    Name: req.params.name
                }
            },
            {
                $lookup: {
                    from: "projects",
                    localField: "project_id",
                    foreignField: "_id",
                    as: "employees_project"
                }
            }
        ]).then((result) => {
            res.send(result)
        }).catch((err) => {
            alert(err)
        })

    },

    insertNewEmployee : async (req, res) => {

        const saveNewEmployee = await new EmployeeEntity(req.body).save()

        res.json(saveNewEmployee)
    },

    changeFieldOfEmployee : (req, res) => {
        EmployeeEntity.findByIdAndUpdate({_id : req.params.id}, req.body).then((result) => {
            res.send(result)
        }).catch((err) => {
            alert(err)
        })
    },

    deleteEmployee : async (req, res) => {
        const result = await EmployeeEntity.findByIdAndDelete({ _id : req.params.id })
        res.json(result)
    }

}