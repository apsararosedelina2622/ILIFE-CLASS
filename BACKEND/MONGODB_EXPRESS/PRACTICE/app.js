const express = require("express")
const app = express()

const dotenv = require("dotenv")
dotenv.config()

const router = require("./router/router")

const connectDB = require("./config/db")
connectDB()

app.use(express.json())

app.use("/api" , router )

app.listen(process.env.PORT , () => {
    console.log("Server running successfully!")
})