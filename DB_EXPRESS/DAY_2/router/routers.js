const express = require("express")
const router = express.Router()

const { AddUser } = require("../controller/userController")

router.post("/add" , AddUser)

module.exports = router