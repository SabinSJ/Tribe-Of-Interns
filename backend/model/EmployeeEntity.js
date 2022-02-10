const { ObjectId } = require('bson')
const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    Name: String,
    Address: String,
    Email: String,
    Hire_date: Date,
    Salary: Number,
    Job_Title: String,
    project_id : ObjectId
})

EmployeeSchema.set('versionKey', false)

module.exports = mongoose.model('employees', EmployeeSchema)