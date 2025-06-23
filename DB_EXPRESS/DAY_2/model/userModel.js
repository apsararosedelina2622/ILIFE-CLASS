const mongoose = require("mongoose")

const userShcema = new mongoose.Schema({
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

const userModel = mongoose.model("user" , userShcema)

module.exports = userModel