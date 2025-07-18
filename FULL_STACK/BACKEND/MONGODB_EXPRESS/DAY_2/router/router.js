const express = require("express")
const router = express.Router()

const { AddUser, GetUser, DeleteUser, UpdateUser } = require("../controller/controller")

router.post("/add" , AddUser)
router.get("/user" , GetUser)
router.delete("/remove/:id" , DeleteUser)
router.put("/update/:id" , UpdateUser)

module.exports = router