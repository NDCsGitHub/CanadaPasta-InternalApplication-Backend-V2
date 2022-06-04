// allows async await in express
const asyncHandler = require('express-async-handler')
// import product model/schema
const ProductModel = require('../models/productModel')


// @desc  Products
// @route GET /api/products
// @access Private
const getProducts = asyncHandler(async (req, res) => {

    // find all the products in mongoDB
    const products = await ProductModel.find()
    res.status(200).json({
        message: 'Get all Products',
        error: false,
        data: products
    })

})


// @desc Set Products
// @route POST /api/products
// @access Private
const setProducts = asyncHandler(async (req, res) => {
    if (!req.body.productNameEN) {
        res.status(400)
        throw new Error('Please add product name')
    }

    // add new product
    const product = await ProductModel.create({
        Product_Name_EN: req.body.productNameEN,
        Product_Name_CN: req.body.productNameCN,
    })
    res.status(200).json({
        message: 'Product Added',
        error: false,
        data: product,
    })
})



// @desc update Products
// @route PUT /api/products/:id
// @access Private
const updateProducts = asyncHandler(async (req, res) => {

    // find the product
    const product = await ProductModel.findById(req.params.id)
    if (!product) {
        res.status(400)
        throw new Error('Product Not Found')
    }

    // update the product
    const updatedProduct = await ProductModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        }
    )
    res.status(200).json({
        message: 'Product Updated',
        error: false,
        data: updatedProduct,
    })
})




// @desc Delete Products
// @route DELETE /api/products/:id
// @access Private
const deleteProducts = asyncHandler(async (req, res) => {

    // find the product
    const product = await ProductModel.findById(req.params.id)
    if (!product) {
        res.status(400)
        throw new Error('Product Not Found')
    }

    // delete the product
    await product.remove()

    res.status(200).json({
        message: 'Product Deleted',
        error: false,
        data: req.params.id,
    })
})





module.exports = {
    getProducts,
    setProducts,
    updateProducts,
    deleteProducts,
}