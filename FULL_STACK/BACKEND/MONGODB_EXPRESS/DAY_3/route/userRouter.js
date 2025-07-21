const express = require("express")
const router = express.Router()

const upload = require("../middleware/upload")

const { AddUser, deleteUser } = require("../controller/userController")

router.post("/add" , upload.single("image") , AddUser)

router.delete("/delete/:id" , deleteUser)

module.exports = router