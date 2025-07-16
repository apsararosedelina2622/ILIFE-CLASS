const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("DB connected!"))
        .catch(() => console.log("DB not connected!"))
}

module.exports = connectDB