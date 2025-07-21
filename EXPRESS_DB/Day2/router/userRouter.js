const express = require("express")
const router = express.Router()

const { addUser, getUser } = require("../controller/userController")

router.post("/add" , addUser)
router.get("/users" , getUser)

module.exports = router