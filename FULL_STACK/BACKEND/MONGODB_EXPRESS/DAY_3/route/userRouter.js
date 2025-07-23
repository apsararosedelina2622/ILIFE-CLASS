const express = require("express")
const router = express.Router()

const upload = require("../middleware/upload")
const addUser = require("../controller/userController")

router.post("/add" , upload.single("image") , addUser)

module.exports = router