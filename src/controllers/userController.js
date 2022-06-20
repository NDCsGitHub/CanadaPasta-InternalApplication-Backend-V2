const asyncHandler = require('express-async-handler')
const UserModel = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')




// @desc  Register a New User
// @route Post /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {

    // check if fields are empty
    const { First_Name, Last_Name, Email, Password, Account_Type, Company } = req.body
    if (!First_Name || !Last_Name || !Email || !Password || !Account_Type || !Company) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // check if user exists in the database already
    const userExists = await UserModel.findOne({ Email })
    if (userExists) {
        res.status(400)
        throw new Error('User Already Exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(Password, salt)

    // Create User
    const user = await UserModel.create({
        First_Name,
        Last_Name,
        Email,
        Password: hashedPassword,
        Account_Type,
        Company,
    })

    if (user) {
        res.status(201).json({
            message: 'User Created!',
            error: false,
            data: {
                _id: user.id,
                firstName: user.First_Name,
                lastName: user.Last_Name,
                email: user.Email,
                accountType: user.Account_Type,
                company: user.Company,
                token: generateToken(user._id)
            },
        })
    } else {
        res.status(400)
        throw new Error('Invalid User Data')
    }

})





// @desc  Authenticate a User
// @route Post /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {

    const { Email, Password } = req.body

    // check for user email
    const user = await UserModel.findOne({ Email })

    if (user && (await bcrypt.compare(Password, user.Password))) {
        res.status(201).json({
            message: 'User Logged In!',
            error: false,
            data: {
                _id: user.id,
                name: user.Name,
                email: user.Email,
                admin: user.Admin,
                token: generateToken(user._id)
            },
        })
    } else {
        res.status(400)
        throw new Error('Invalid Credentials')
    }
})




// @desc  Get User Data after logged in
// @route Get /api/users/userdata
// @access Private
const getUserData = asyncHandler(async (req, res) => {

    // dont need to find user again, since auth middleware already provided us with the user info
    res.status(200).json({
        message: 'user data obtained',
        error: false,
        data: req.user

    })
})













// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}




module.exports = {
    registerUser,
    loginUser,
    getUserData,
}