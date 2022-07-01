const express = require('express')
const router = express.Router()


// import controllers
const {
    getCustomer,
    setCustomer,

} = require('../controllers/customerController')


// import private route middleware
const { protect } = require('../middlewares/authMiddleware')




// @desc routes for customer
// @route /api/customers
router.route('/').get(protect, getCustomer).post(protect, setCustomer)
router.route('/').put(protect, updateCustomer).delete(protect, deleteCustomer)

// @desc routes for customer base on user
// @route /api/customers
router.route('/usercustomer').get(protect, getCustomer).post(protect, setCustomer)





module.exports = router

