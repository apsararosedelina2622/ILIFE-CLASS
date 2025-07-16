const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : {
        type : String , 
        required : true
    } , 
    age : {
        type : Number , 
        required : true
    } , 
    place : {
        type : String , 
        required : true
    }
})

const userModel = mongoose.model("data" , userSchema)

module.exports = userModel