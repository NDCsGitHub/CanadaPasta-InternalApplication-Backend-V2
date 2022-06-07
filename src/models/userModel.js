const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    Name: {
        type: String,
        required: [true, 'Please Add a Name']
    },
    Email: {
        type: String,
        required: [true, 'Please Add an Email'],
        unique: true,
    },
    Password: {
        type: string,
        required: true,
    },
    Admin: {
        type: Boolean,
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('user', userSchema)