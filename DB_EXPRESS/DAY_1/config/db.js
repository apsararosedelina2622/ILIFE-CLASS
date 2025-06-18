const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("Database connected successfully!"))
        .catch(() => console.log("Database is not connected!"))
}

module.exports = connectDB