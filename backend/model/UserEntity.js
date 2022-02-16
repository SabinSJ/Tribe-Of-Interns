const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: String,
    password: String
})

UserSchema.set('versionKey', false)

module.exports = mongoose.model('users', UserSchema)