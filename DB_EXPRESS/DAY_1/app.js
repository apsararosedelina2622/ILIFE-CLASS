const userModel = require("./model/user")

const connectDB = require("./config/db")
connectDB()

const userData = new userModel({
    name : "user" , 
    age : 21 ,
    place : "Trichy"
})

userData.save()
    .then(() => console.log("Data saved!"))
    .catch(() => console.log("Data is not saved!"))