const express = require("express")
const router = express.Router()

const addData = require("../controller/userController")
const upload = require("../middleware/upload")

router.post("/add" , upload.single("image") , addData)

module.exports = router