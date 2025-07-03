const productModel = require("../model/productModel")

const addProduct = async (req , res) => {
    try{
        const productData = new productModel({
            productType : req.body.productType , 
            productDesc : req.body.productDesc , 
            productPrice : req.body.productPrice , 
            productImage : {
                data : req.file.buffer , 
                conntentType : req.file.mimeType
            }
        })

        await productData.save()
        res.status(200).send("Data Added!")
    }
    catch(err){
        res.status(404).send(`Error : ${err.name} , Error : ${err.message}`)
    }
}

module.exports = { addProduct }