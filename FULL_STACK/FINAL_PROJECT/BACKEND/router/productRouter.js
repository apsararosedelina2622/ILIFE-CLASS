const express = require("express")
const productRouter = express()

const { addProduct } = require("../controller/productController")

productRouter.post("/add" , addProduct)

module.exports = productRouter