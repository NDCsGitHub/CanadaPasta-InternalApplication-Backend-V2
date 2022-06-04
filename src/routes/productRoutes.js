const express = require('express')
const router = express.Router()

// import controllers
const {
    getProducts,
    setProducts,
    updateProducts,
    deleteProducts,
} = require('../controllers/productController')




router.route('/').get(getProducts).post(setProducts)
router.route('/:id').put(updateProducts).delete(deleteProducts)





module.exports = router