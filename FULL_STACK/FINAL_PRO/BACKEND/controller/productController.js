const productModel = require("../model/productModel")

const addProduct =  async (req , res) => {
    try{
        const { category , type , desc , price , img } = req.body

        const productData = new productModel({
            category , 
            type , 
            desc , 
            price , 
            img
        })
        await productData.save()
        res.status(200).send(`Data Added!`)
    }
    catch(err){
        res.status(200).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
}

const getProduct = async (req , res) => {
    try{
        const productData = await productModel.find()
        res.status(200).send(productData)
    }
    catch(err){
        res.status(200).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
}

module.exports = { addProduct , getProduct }