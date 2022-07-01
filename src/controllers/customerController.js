// allow async await in express
const asyncHandler = require('express-async-handler')
// import model/schema
const UserModel = require('../models/userModel')
const CustomerModel = require('../models/customerModel')
const { default: customerService } = require('../../../CanadaPasta-InternalApplication-Frontend-V2/src/features/customer/customerService')




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

