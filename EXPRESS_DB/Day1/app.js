const connectDB = require("./config/db");
connectDB()

const userModel = require("./model/userModel");

const userData = new userModel({
    name : "User1" , 
    age : 22 , 
    place : "chennai"
})

userData.save() 

    .then(() => console.log("User data saved!"))
    .catch(() => console.log("User data is not saved!"))