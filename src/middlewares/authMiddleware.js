const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const UserModel = require('../models/userModel')


// middleware for private routes, here we check to see if user has the token or not
// token should be stored in the frontend either in cookie or local storage
// frontend should be able to attach the token in its authroizations headers
// every private API will go through here to check if the token is valid.
const protect = asyncHandler(async (req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // get token from header
            token = req.headers.authorization.split(' ')[1]

            // verify token with the JWT_SECRET stored in env
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // get user from the token, req.user is now available in controller
            req.user = await UserModel.findById(decoded.id).select('-password')

            // call next middleware
            next()

        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not Authorized')
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('Token Missing, Only Authorized User are Allowed')
    }

})

module.exports = {
    protect
}