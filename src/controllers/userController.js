// const asyncHandler = require('express-async-handler')

// const UserModel = require('../models/userModel')



// @desc  Register a New User
// @route Post /api/users
// @access Public
const registerUser = (req, res) => {
    res.json({
        message: 'register User'
    })
}


// @desc  Authenticate a User
// @route Post /api/users/login
// @access Public
const loginUser = (req, res) => {
    res.json({
        message: 'Login User'
    })
}


// @desc  Get User Data
// @route Get /api/users/userdata
// @access Public
const getUserData = (req, res) => {
    res.json({
        message: 'user data'
    })
}



module.exports = {
    registerUser,
    loginUser,
    getUserData,
}