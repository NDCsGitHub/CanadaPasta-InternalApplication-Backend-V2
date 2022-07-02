// allow async await in express
const asyncHandler = require('express-async-handler')
// import model/schema
const UserModel = require('../models/userModel')
const CustomerModel = require('../models/customerModel')





/***********************************GET********************************/

// @desc Get All Customers
// @route GET /api/customers
// @access Private
const getCustomer = asyncHandler(async (req, res) => {

    // find all the customer
    const customers = await CustomerModel.find()

    res.status(200).json({
        message: 'Get all Customer',
        error: false,
        data: customers
    })

})


// @desc Get All Customers base on the user who created it
// @route GET /api/customers
// @access Private
const getUserCustomers = asyncHandler(async (req, res) => {

    // find all the customers base creator
    const customers = await CustomerModel.find({ user: req.user.id })
    res.status(200).json({
        message: 'Get all customers base on the creator',
        error: false,
        data: customers,
    })
})



/*********************************CREATE***********************************/
// @desc Create Customer
// @route POST /api/customers
// @access Private
const setCustomer = asyncHandler(async (req, res) => {

    if (!req.body.product_name_en) {
        res.status(400)
        throw new Error('Please add product name')
    }

    // check for user
    if (!req.user) {
        res.status(401)
        throw new Error('A user must login to create the products')
    }

    // add new product
    const product = await CustomerModel.create({

    })
    res.status(200).json({
        message: 'Product Added',
        error: false,
        data: product,
    })
})





module.exports = {
    getCustomer,
    getUserCustomers,
    setCustomer,
}