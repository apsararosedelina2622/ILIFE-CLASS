const express = require("express")
const router = express.Router()

const { addProduct, getProduct } = require("../controller/productController")

router.post("/add" , addProduct)

router.get("/products" , getProduct)

module.exports = router