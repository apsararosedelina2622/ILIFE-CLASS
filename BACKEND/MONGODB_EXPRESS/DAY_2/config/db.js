const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB connected"))
    .catch(() => console.log("❌ MongoDB connection failed"));
};

module.exports = connectDB;