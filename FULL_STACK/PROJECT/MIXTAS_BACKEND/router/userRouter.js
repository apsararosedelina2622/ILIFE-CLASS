const express = require("express")
const userRoute = express.Router()

const { addUser, getUser, removeUser } = require("../controller/userController")

userRoute.post("/adduser" , addUser)
userRoute.get("/users" , getUser)
userRoute.delete("/remove/:id" , removeUser)

module.exports = userRoute