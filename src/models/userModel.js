const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    First_Name: {
        type: String,
        required: [true, 'Please Add First Name']
    },
    Last_Name: {
        type: String,
        required: [true, 'Please Add Last Name']
    },
    Email: {
        type: String,
        required: [true, 'Please Add an Email'],
        unique: true,
    },
    Password: {
        type: String,
        required: true,
    },
    Account_Type: {
        type: String,
        require: true
    },
    Company: {
        type: String,
        require: true
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('user', userSchema)