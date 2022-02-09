const { ObjectId } = require('bson')
const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    _id: ObjectId,
    Name: String,
    Address: String,
    Email: String,
    Hire_date: Date,
    Salary: Number,
    Job_Title: String
})

module.exports = mongoose.model('Employees', EmployeeSchema)