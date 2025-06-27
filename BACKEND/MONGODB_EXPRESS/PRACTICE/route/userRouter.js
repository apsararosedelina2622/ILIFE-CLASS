const express = require("express")
const router = express.Router()

const upload = require("../middleware/upload")

const { AddUser } = require("../controller/userController")

router.post("/add" , upload.single("image") , AddUser)

module.exports = router