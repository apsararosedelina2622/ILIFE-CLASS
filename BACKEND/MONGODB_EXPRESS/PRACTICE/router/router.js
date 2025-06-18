const express = require("express")
const router = express.Router()

const { AddUser } = require("../controller/controller")

router.post("/add" , AddUser)

module.exports = router