const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const app = express()
const cors = require('cors')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

//connect to Mongo
connectDB()








// Customer Routes
app.use('/api/customer', require('./routes/customerRoutes.js'))


// overwrite default express error
app.use(errorHandler)


// define port and set listen
const port = process.env.PORT || 8000
app.listen(port, () => console.log(`server started on port ${port}`))
