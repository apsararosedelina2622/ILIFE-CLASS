const dotenv = require("dotenv")
dotenv.config()

const connectDB = require("./config/db");
connectDB()

const express = require("express");
const app = express()

const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use("/uploads", express.static("uploads"));

const router = require("./route/userRouter");

app.use("/api" , router)

app.listen(process.env.PORT , () => {
    console.log("Server running successfully!")
})