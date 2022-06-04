// define models, product schema
const mongoose = require('mongoose')

// product Schema definition
const productSchema = mongoose.Schema({
    Product_Name_EN: {
        type: String,
        required: [true, 'Please add Product Name EN']
    },
    Product_Name_CN: {
        type: String,
        required: [true, 'Please add Product Name CN']
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('product', productSchema)



    `// define models, product schema`

    `const mongoose = require('mongoose')`

    `// product Schema definition`

    `const productSchema = mongoose.Schema({`

    `Product_Name_EN: {`

    `type: String,`

    `required: [true, 'Please add Product Name EN']`

    `},`

    `Product_Name_CN: {`

    `type: String,`

    `required: [true, 'Please add Product Name CN']`

    `}`

    `}, {`

    `timestamps: true,`

    `})`

    `module.exports = mongoose.model('product', productSchema)`