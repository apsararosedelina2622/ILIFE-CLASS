const connectDB = require("./config/db");
connectDB()

const express = require("express")
const app = express()

const dotenv = require("dotenv");
dotenv.config()

const router = require("./router/userRouter");

app.use(express.json())

app.use("/api" , router)

app.listen(process.env.PORT , () => {
    console.log("server running!")
})