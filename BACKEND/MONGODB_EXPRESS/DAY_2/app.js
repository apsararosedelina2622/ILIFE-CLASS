const express = require("express");
const app = express();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

// Middlewares
app.use(express.json());
connectDB();

// Route Use
app.use("/api", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
})