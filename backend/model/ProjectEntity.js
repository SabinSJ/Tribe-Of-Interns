const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    Project_name: String,
    Start_date: Date,
    Planned_end_date: Date,
    Description: String,
    Project_code: String
})

ProjectSchema.set('versionKey', false)

module.exports = mongoose.model('Projects', ProjectSchema)