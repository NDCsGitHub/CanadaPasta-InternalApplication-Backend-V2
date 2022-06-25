const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const app = express()
const cors = require('cors')
const { errorHandler } = require('./src/middlewares/errorMiddleware')
const connectDB = require('./src/configs/db')
const path = require('path')

//connect to Mongo
connectDB()

// add middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



// product Routes
app.use('/api/products', require('./src/routes/productRoutes.js'))

// user Routes
app.use('/api/users', require('./src/routes/userRoutes.js'))

// customer route
app.use('/api/customers', require('./src/routes/customerRoutes.js'))



// overwrite default express error
app.use(errorHandler)

// define port and set listen
const port = process.env.PORT || 8000
app.listen(port, () => console.log(`server started on port ${port}`))
