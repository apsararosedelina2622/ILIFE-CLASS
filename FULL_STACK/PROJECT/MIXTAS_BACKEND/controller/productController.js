const productModel = require("../model/productModal")

const addProduct = async (req , res) => {
    try{

        const { type , desc , price } = req.body

        const userData = new productModel({
            type , 
            desc , 
            price ,
            img : {
                data : req.file.buffer , 
                contentType : req.file.mimetype
            }
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

module.exports = { addProduct , getProduct }