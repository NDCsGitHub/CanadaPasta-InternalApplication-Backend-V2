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
    Phone: {
        type: String,
        require: [true, 'Please add a Phone Number']
    },
    Wechat: {
        type: String,
        require: [true, 'Please Include a Wechat ID']
    },
    Email: {
        type: String,
        require: [true, 'Please Include a Email for the Contact']
    },
    Addtional_Info: {
        type: String,
        require: false,
    },
    Business_Name_EN: {
        type: String,
        require: [true, 'Please Include Business Name EN']
    },
    Business_Name_CN: {
        type: String,
        require: [true, 'Please Include Business Name CN']
    },
    Business_Phone: {
        type: String,
        require: [true, 'Please Include Business Phone Number']
    },
    Business_Number: {
        type: String,
        require: [true, 'Please Include The Business Number']
    },
    Address: {
        Shipping: addressSchema,
        Billing: addressSchema,
    }
}, {
    timestamps: true,
})

const addressSchema = mongoose.Schema({
    Street_Number: {
        type: String,
        require: [true, 'Please include the street number']
    },
    Street_Name: {
        type: String,
        require: [true, 'Please Include The Street Name']
    },
    City: {
        type: String,
        require: [true, 'Please include the city']
    },
    Province: {
        type: String,
        require: [true, 'Please include the province']
    },
    Postal_Code: {
        type: String,
        require: [true, 'Please include the Postal Code']
    },
    Country: {
        type: String,
        require: [true, 'Please include country']
    },
})


module.exports = mongoose.model('customer', customerSchema)

// https://stackoverflow.com/questions/39596625/nested-objects-in-mongoose-schemas