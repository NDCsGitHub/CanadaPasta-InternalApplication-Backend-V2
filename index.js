const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const app = express()
const cors = require('cors')
const { errorHandler } = require('./src/middlewares/errorMiddleware')
const connectDB = require('./src/config/db')

//connect to Mongo
connectDB()

// add middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



// Customer Routes
app.use('/api/products', require('./src/routes/productRoutes.js'))





// overwrite default express error
app.use(errorHandler)

// define port and set listen
const port = process.env.PORT || 8000
app.listen(port, () => console.log(`server started on port ${port}`))
