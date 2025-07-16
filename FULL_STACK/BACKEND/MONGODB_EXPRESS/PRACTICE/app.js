const connectDB = require("./config/db");
connectDB()

const userModel = require("./model/userModel");

const userData = new userModel({
    name : "Rhythm" , 
    age : 21 ,
    place : "Trichy"
})

userData.save()