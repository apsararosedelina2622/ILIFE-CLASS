const userModel = require("../model/userModel")

const AddUser = async (req , res) => {
    try{
        const userData = new userModel({
            name : req.body.name , 
            age : req.body.age , 
            place : req.body.place , 
            image : {
                data : req.file.buffer , 
                contentType : req.file.mimetype
            }
        })

        await userData.save()
        res.status(200).send("Data Added!")
    }
    catch(err){
        res.status(404).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
}

module.exports = { AddUser }