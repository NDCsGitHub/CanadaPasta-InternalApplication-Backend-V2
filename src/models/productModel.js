// define models, product schema
const mongoose = require('mongoose')

// product Schema definition
const productSchema = mongoose.Schema({
    // to know which user created the product, the ref is the user model
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'user'
    },
    Product_Name_EN: {
        type: String,
        required: [true, 'Please add Product Name EN']
    },
    Product_Name_CN: {
        type: String,
        required: [true, 'Please add Product Name CN']
    },
    Product_Type: {
        type: String,
        required: [true, 'Please add Product Type for the Item']
    },
    Product_Description: {
        type: String,
        required: [true, 'Please make sure to have a simple description for the item']
    },

}, {
    timestamps: true,
})

module.exports = mongoose.model('product', productSchema)


