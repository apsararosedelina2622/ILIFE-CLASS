const connectDB = require("./config/db")
connectDB()

const express = require("express")
const app = express()

const dotenv = require("dotenv")
dotenv.config()

app.use(express.json())

const router = require("./router/router")
app.use("/api" , router )

app.listen(process.env.PORT , () => {
    console.log("Server running successfully!")
})