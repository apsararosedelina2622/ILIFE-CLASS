const connectDB = require("./config/db");
connectDB()

const dotenv = require("dotenv")
dotenv.config()

const express = require("express");
const app = express()

const cors = require("cors")

app.use(cors())
app.use(express.json({ limit : "50mb" }))

const productRouter = require("./router/productRouter");

app.use("/product" , productRouter)

app.listen(process.env.PORT , () => {
    console.log("server running!")
})