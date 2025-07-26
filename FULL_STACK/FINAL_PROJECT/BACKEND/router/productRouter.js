const express = require("express")
const productRouter = express()

const { addProduct, getUser } = require("../controller/productController")

productRouter.post("/add" , addProduct)
productRouter.get("/products" , getUser)

module.exports = productRouter