// define models, customer schema
const mongoose = require('mongoose')

// customer schema
const customerSchema = mongoose.Schema({
    // to record which user created the customer, the ref is the user model
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: [true, 'Please add User ID'],
        ref: 'user'
    },
    Business_Type: {
        type: String,
        require: [true, 'Please add Customer Type']
    },
    Contact_Name: {
        type: String,
        require: [true, 'Please add Main Contact Name']
    },
    Contact_Name_2: {
        type: String,
        require: [true, 'Please add Secondary Contact Name']
    },

})