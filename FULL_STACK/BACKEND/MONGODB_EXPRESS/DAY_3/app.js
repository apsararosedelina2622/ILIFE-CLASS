const connectDB = require("./config/db");
connectDB()

const dotenv = require("dotenv")
dotenv.config()

const express = require("express");
const app = express()

app.use(express.json())
app.use(express.urlencoded())

const router = require("./route/userRouter");

app.use("/api" , router)

app.listen(process.env.PORT , () => {
    console.log("server running!")
})