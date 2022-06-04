




// @desc  Products
// @route GET /api/products
// @access Private
const getProducts = (req, res) => {
    if (!req.body.productName) {
        res.status(400)
        throw new Error('Please add product name')
    }

}


// @desc Set Products
// @route POST /api/products
// @access Private
const setProducts = (req, res) => {
    res.status(200).json({ message: 'set product' })
}

// @desc update Products
// @route PUT /api/products/:id
// @access Private
const updateProducts = (req, res) => {
    res.status(200).json({ message: `update product ${req.params.id}` })
}

// @desc Delete Products
// @route DELETE /api/products/:id
// @access Private
const deleteProducts = (req, res) => {
    res.status(200).json({ message: `delete goal ${req.params.id}` })
}






module.exports = {
    getProducts,
    setProducts,
    updateProducts,
    deleteProducts,
}