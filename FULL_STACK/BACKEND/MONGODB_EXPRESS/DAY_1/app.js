const connectDB = require("./config/db")
connectDB()

const userSchema = require("./models/user")

const userData = new userSchema({
    name : "Rhythm" ,
    age : 21 ,
    place : "Trichy"
})

userData.save()
    .then(() => console.log("Data Saved!"))
    .catch(() => console.log("Data is not Saved!"))