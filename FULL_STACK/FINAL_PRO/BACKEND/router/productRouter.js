const express = require("express")
const router = express.Router()

const { addProduct, getProduct, removeProduct, updateProduct } = require("../controller/productController")

router.post("/add" , addProduct)
router.get("/products" , getProduct)
router.delete("/remove/:id" , removeProduct)
router.put("/update/:id" , updateProduct)

module.exports = router