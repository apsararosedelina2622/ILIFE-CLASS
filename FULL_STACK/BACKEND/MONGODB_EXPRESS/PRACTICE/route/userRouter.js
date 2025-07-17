const express = require("express")
const router = express.Router()

const { addUser, getUser, removeUser, updateUser } = require("../controller/userController")

router.post("/add" , addUser)
router.get("/user" , getUser)
router.delete("/remove/:id" , removeUser)
router.put("/update/:id" , updateUser)

module.exports = router