const express = require("express")
const router = express.Router()

const upload = require("../middleware/upload")

const { AddUser, getUser } = require("../controller/userController")

router.post("/add" , upload.single("image") , AddUser)
router.get("/users" , getUser)

module.exports = router