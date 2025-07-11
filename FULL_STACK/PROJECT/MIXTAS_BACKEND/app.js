const connectDB = require("./config/db");
connectDB()

const dotenv = require("dotenv")
dotenv.config()

const cors = require("cors")

const express = require("express");
const app = express()

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

const productRoute = require("./router/productRouter");
const userRoute = require("./router/userRouter");

app.use(cors())

app.use(express.json())

app.use("/product" , productRoute)
app.use("/user" , userRoute)

app.listen(process.env.PORT , () => {
    console.log("server running successfully!")
})