const mongoose = require('mongoose')
const dotenv = require('dotenv').config()


// connect to mongoDB
const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB Connected: ${connect.connection.host}`.cyan.underline)

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB  