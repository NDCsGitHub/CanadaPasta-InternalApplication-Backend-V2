const express = require('express')
const router = express.Router()

// import controllers
const {
    getCustomer,
    getUserCustomers,
    setCustomer,

} = require('../controllers/customerController')


// import private route middleware
const { protect } = require('../middlewares/authMiddleware')




// @desc routes for customer
// @route /api/customers
router.route('/').get(protect, getCustomer).post(protect, setCustomer)
// router.route('/').put(protect, updateCustomer).delete(protect, deleteCustomer)


// @desc routes for customer base on user
// @route /api/usercustomers
router.route('/usercustomers').get(protect, getUserCustomers)





module.exports = router

