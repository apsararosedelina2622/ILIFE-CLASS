const express = require("express")
const productRoute = express.Router()

const { addProduct, getProduct, removeProduct, updateProduct } = require("../controller/productController")

productRoute.post("/add" , addProduct)
productRoute.get("/products" , getProduct)
productRoute.delete("/remove/:id" , removeProduct)
productRoute.put("/update/:id" , updateProduct)

module.exports = productRoute