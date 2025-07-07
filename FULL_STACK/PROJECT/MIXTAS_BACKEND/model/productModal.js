const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    category : {
        type : String , 
        required : true
    } , 
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
        type : String , 
        required : true
    }
})

const productModel = mongoose.model("product" , productSchema)

module.exports = productModel