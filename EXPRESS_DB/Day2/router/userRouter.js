const express = require("express")
const router = express.Router()

const { addUser, getUser, deleteUser, updateUser } = require("../controller/userController")

router.post("/add" , addUser)
router.get("/users" , getUser)
router.delete("/remove/:id" , deleteUser )
router.put("/update/:id" , updateUser)

module.exports = router