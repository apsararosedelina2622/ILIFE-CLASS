const connectDB = require("./config/db");
connectDB()

const dotenv = require("dotenv")
dotenv.config()

const express = require("express");
const app = express()

const router = require("./router/routers");

app.use(express.json())

app.use("/api" , router)

app.listen(process.env.PORT , () => {
    console.log("Server Running Successfully!")
})