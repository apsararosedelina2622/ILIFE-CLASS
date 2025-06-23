const express = require("express")
const router = express.Router()

const { AddUser, GetUser, DeleteUser, UpdateUser } = require("../controller/userController")

router.post("/add" , AddUser)
router.get("/user" , GetUser)
router.delete("/delete/:id" , DeleteUser)
router.get("/update/:id" , UpdateUser)

module.exports = router