const express = require('express')
const router = express.Router()

// import controllers
const {
    getProducts,
    setProducts,
    updateProducts,
    deleteProducts,
    getUserProducts,
    updateUserProducts,
    deleteUserProducts,
} = require('../controllers/productController')

// import private route middleware
const { protect } = require('../middlewares/authMiddleware')



router.route('/').get(protect, getProducts).post(protect, setProducts)
router.route('/').put(protect, updateProducts).delete(protect, deleteProducts)
router.route('/userproduct').get(protect, getUserProducts)
router.route('/userproduct').put(protect, updateUserProducts).delete(protect, deleteUserProducts)

module.exports = router

