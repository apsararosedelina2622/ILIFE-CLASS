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
    } , 
    image : {
        data : Buffer , 
        contentType : String 
    }
})

const userModel = mongoose.model("user" , userSchema)

module.exports = userModel