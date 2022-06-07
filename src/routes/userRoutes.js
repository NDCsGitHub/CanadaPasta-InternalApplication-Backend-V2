const express = require('express')
const router = express.Router()

const {
    registerUser,
    loginUser,
    getUserData,
} = require('../controllers/userController')



router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/userdata', getUserData)





module.exports = router