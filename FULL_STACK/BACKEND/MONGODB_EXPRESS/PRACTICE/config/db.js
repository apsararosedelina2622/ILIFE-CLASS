const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => { console.log("Database connected!") })
        .catch(() => { console.log("Database is not connected!") })
}

module.exports = connectDB