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
    getProductByType,

} = require('../controllers/productController')

// import private route middleware
const { protect } = require('../middlewares/authMiddleware')


// routes for products
router.route('/').get(protect, getProducts).post(protect, setProducts)
router.route('/').put(protect, updateProducts).delete(protect, deleteProducts)

// routes for product base on user
router.route('/userproduct').get(protect, getUserProducts)
router.route('/userproduct').put(protect, updateUserProducts).delete(protect, deleteUserProducts)

// routes for products base on product types
router.route('/producttype').get(protect, getProductByType)


module.exports = router

