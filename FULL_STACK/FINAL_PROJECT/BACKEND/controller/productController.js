const productModel = require("../model/productModel")

const addProduct = async (req , res) => {
    try{
        const { type , category , desc , price , img } = req.body
        const productData = new productModel({
            type , 
            category , 
            desc , 
            price , 
            img
        })
        await productData.save()
        res.status(200).send("Product Added!")
    }
    catch(err){
        res.status(200).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
}

const getUser = async (req , res) => {
    try{
        const userList = await productModel.find()
        res.status(200).send(userList)
    }
    catch(err){
        res.status(200).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
}

module.exports = { addProduct , getUser }