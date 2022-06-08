// allows async await in express
const asyncHandler = require('express-async-handler')
// import  model/schema
const ProductModel = require('../models/productModel')
const UserModel = require('../models/userModel')





/************************GET*******************************/

// @desc  Get All Products
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

// @desc  Get Products that belongs to the logged in user
// @route GET /api/userproduct
// @access Private
const getUserProducts = asyncHandler(async (req, res) => {

    // find all the products in mongoDB
    const products = await ProductModel.find({ user: req.user.id })
    res.status(200).json({
        message: 'Get all Products That Belongs to the User',
        error: false,
        data: products
    })

})


/*************************CREATE******************************/

// @desc Create Products
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
        user: req.user.id,
    })
    res.status(200).json({
        message: 'Product Added',
        error: false,
        data: product,
    })
})




/**************************UPDATE*****************************/

// @desc update Products
// @route PUT /api/products
// @access Private
const updateProducts = asyncHandler(async (req, res) => {

    // find the product
    const product = await ProductModel.findById(req.query.id)
    if (!product) {
        res.status(400)
        throw new Error('Product Not Found')
    }

    // check for user
    const user = await UserModel.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error('User Not Found')
    }

    // update the product
    const updatedProduct = await ProductModel.findByIdAndUpdate(
        req.query.id,
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



// @desc update user specific Products
// @route PUT /api/userproduct
// @access Private
const updateUserProducts = asyncHandler(async (req, res) => {

    // find the product
    const product = await ProductModel.findById(req.query.id)
    if (!product) {
        res.status(400)
        throw new Error('Product Not Found')
    }

    // check for user
    const user = await UserModel.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error('User Not Found')
    }

    // only allow creator of the product to update
    if (product.user.toString() !== user.id) {
        res.status(401)
        throw new Error('Only Creator of the product are allowed to modify the item')
    }


    // update the product
    const updatedProduct = await ProductModel.findByIdAndUpdate(
        req.query.id,
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







/***************************DELETE****************************/


// @desc Delete Products
// @route DELETE /api/products
// @access Private
const deleteProducts = asyncHandler(async (req, res) => {

    // find the product
    const product = await ProductModel.findById(req.query.id)
    if (!product) {
        res.status(400)
        throw new Error('Product Not Found')
    }

    // check for user
    const user = await UserModel.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error('User Not Found')
    }

    // delete the product
    await product.remove()

    res.status(200).json({
        message: 'Product Deleted',
        error: false,
        data: product,
    })
})



// @desc Delete Products
// @route DELETE /api/userproduct
// @access Private
const deleteUserProducts = asyncHandler(async (req, res) => {

    // find the product
    const product = await ProductModel.findById(req.query.id)
    if (!product) {
        res.status(400)
        throw new Error('Product Not Found')
    }


    // check for user
    const user = await UserModel.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error('User Not Found')
    }

    // only allow creator of the product to update
    if (product.user.toString() !== user.id) {
        res.status(401)
        throw new Error('Only Creator of the product are allowed to delete the item')
    }


    // delete the product
    await product.remove()

    res.status(200).json({
        message: 'Product Deleted',
        error: false,
        data: product,
    })
})



module.exports = {
    getProducts,
    setProducts,
    updateProducts,
    deleteProducts,
    getUserProducts,
    updateUserProducts,
    deleteUserProducts,
}