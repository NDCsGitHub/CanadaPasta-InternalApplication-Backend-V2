




// @desc  Products
// @route GET /api/products
// @access Private
const getProducts = (req, response) => {
    res.status(200).json({ message: 'get product' })
}


// @desc Set Products
// @route POST /api/products
// @access Private
const setProducts = (req, response) => {
    res.status(200).json({ message: 'set product' })
}

// @desc update Products
// @route PUT /api/products/:id
// @access Private
const updateProducts = (req, response) => {
    res.status(200).json({ message: `update product ${req.params.id}` })
}

// @desc Delete Products
// @route DELETE /api/products/:id
// @access Private
const deleteProducts = (req, response) => {
    res.status(200).json({ message: `delete goal ${req.params.id}` })
}






module.exports = {
    getProducts,
    setProducts,
    updateProducts,
    deleteProducts,
}