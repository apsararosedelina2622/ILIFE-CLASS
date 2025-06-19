const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : {
        type : String , 
        require : true
    } , 
    age : {
        type : Number , 
        require : true
    } , 
    place : {
        type : String , 
        require : true
    }
})

const userModel = mongoose.model("user" , userSchema) 

module.exports = userModel