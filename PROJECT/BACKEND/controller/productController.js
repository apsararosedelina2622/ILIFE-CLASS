const productModel = require("../model/productModel");

const addProduct = async (req , res) => {
    try{
        const { category , type , desc , price , img } = req.body;
        const productData = new productModel({
            category , 
            type , 
            desc , 
            price , 
            img
        })
        await productData.save()
        res.status(200).send("Data Added!")
    }
    catch(err){
        res.status(404).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
}

const getProduct = async (req , res) => {
    try{
        const productData = await productModel.find()
        res.status(200).send(productData)
    }
    catch(err){
        res.status(404).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
} 

const removeProduct = async (req , res) => {
    try{
        await productModel.findByIdAndDelete(req.params.id)
        res.status(200).send("Data Removed!")
    }
    catch(err){
        res.status(404).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
}

const updateProduct = async (req , res) => {
    try{
        var updatedData = await productModel.findByIdAndUpdate(req.params.id , req.body , { new : true })
        res.status(200).send(updatedData)
    }
    catch(err){
        res.status(404).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
}

module.exports = { addProduct , getProduct , removeProduct, updateProduct }