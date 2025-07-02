const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    type : {
        type : String , 
        required : true
    } , 
    desc : {
        type : String , 
        required : true
    } , 
    price : {
        type : Number , 
        required : true
    } , 
    img : {
        data : Buffer , 
        contentType : String
    }
})

const productModel = mongoose.model("product" , productSchema)

module.exports = productModel