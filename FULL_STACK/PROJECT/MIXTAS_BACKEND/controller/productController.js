const productModel = require("../model/productModal")

const addProduct = async (req , res) => {
    try{

        const { category , type , desc , price , img } = req.body

        const userData = new productModel({
            category , 
            type , 
            desc , 
            price ,
            img
        })

        await userData.save()
        res.status(200).send("Data Added!")
    }
    catch(err){
        res.status(200).send(`Error Name : ${err.name} `)
    }
}

const getProduct = async (req , res) => {
    try{
        const products = await productModel.find()
        res.status(200).send(products)
    }
    catch(err){
        res.status(200).send(`Error Name : ${err.name} `)
    }
}

const removeProduct = async (req , res) => {
    try{
        await productModel.findByIdAndDelete(req.params.id)
        res.status(200).send("Data Removed!")
    }
    catch(err){
        res.status(200).send(`Error Name : ${err.name} `)
    }
}

const updateProduct = async (req , res) => {
    try{
        const updatedProduct = await productModel.findByIdAndUpdate(req.params.id , req.body , { new : true })
        res.status(200).send(updatedProduct)
    }
    catch(err){
        res.status(200).send(`Error Name : ${err.name} `)
    }
}

module.exports = { addProduct , getProduct , removeProduct , updateProduct }