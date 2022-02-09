const EmployeeEntity = require('../model/EmployeeEntity')

module.exports = {

    getEmployees : (req, res) => {
        EmployeeEntity.find({}).then((result) => {
            res.json(result)
        }).catch((err) => {
            alert(err)
        })
    }

}