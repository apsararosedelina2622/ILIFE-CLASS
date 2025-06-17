const mongoose = require("mongoose")

const userModel = new mongoose.Schema({
    name : {
        type : String , 
        required : true
    }, 
    age : {
        type : Number , 
        required : true
    }, 
    place : {
        type : String , 
        required : true
    }
})

const userSchema = mongoose.model("User" , userModel)

module.exports = userSchema;