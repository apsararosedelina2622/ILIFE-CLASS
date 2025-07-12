const express = require("express")
const userRoute = express.Router()

const { addUser, getUser, removeUser, loginUser } = require("../controller/userController")

userRoute.post("/adduser" , addUser)
userRoute.get("/users" , getUser)
userRoute.delete("/remove/:id" , removeUser)
userRoute.post("/login" , loginUser)

module.exports = userRoute