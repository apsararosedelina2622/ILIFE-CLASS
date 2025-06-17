const connectDB = require("./config/db")

const userSchema = require("./models/user")

connectDB()

const userData = new userSchema({
    name : "Rhythm" ,
    age : 21 ,
    place : "Trichy"
})

userData.save()
    .then(() => console.log("Data Saved!"))
    .catch(() => console.log("Data is not Saved!"))