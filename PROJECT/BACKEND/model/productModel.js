const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    productType : {
        type : String , 
        required : true
    } , 
    productDesc : {
        type : String , 
        required : true
    } , 
    productPrice : {
        type : Number , 
        required : true
    } , 
    productImage : {
        data : Buffer , 
        contentType : String
    }
})

const productModel = mongoose.model("product" , productSchema)

module.exports = productModel