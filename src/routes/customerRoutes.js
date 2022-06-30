const express = require('express')
const router = express.Router()


// import controllers
const {
    getCustomer,
    setCustomer,

} = require('../controllers/customerController')


// import private route middleware
const { protect } = require('../middlewares/authMiddleware')



// routes for customer
router.route('/').get(protect, getCustomer).post(protect, setCustomer)
router.route('/').get(protect, updateCustomer).delete(protect, deleteCustomer)


module.exports = router

