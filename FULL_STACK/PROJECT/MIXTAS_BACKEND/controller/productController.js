
const addProduct = async (req , res) => {
    try{

        const { type , desc , price } = rq.body

        const userData = new userModel({
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

module.exports = { addProduct }