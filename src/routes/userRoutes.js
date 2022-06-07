const express = require('express')
const router = express.Router()

const {
    registerUser,
    loginUser,
    getUserData,
} = require('../controllers/userController')

const { protect } = require('../middlewares/authMiddleware')


router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/userdata', protect, getUserData)





module.exports = router