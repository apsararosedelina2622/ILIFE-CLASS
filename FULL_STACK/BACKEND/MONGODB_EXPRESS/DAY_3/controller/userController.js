const userModel = require("../model/userModel")

const AddUser = async (req , res) => {
    try{
        const userData = new userModel({
            name : req.body.name , 
            age : req.body.age , 
            place : req.body.place , 
            image : req.file.filename
        })

        await userData.save()
        res.status(200).send("Data Added!")
    }
    catch(err){
        res.status(200).send(`Error Name : ${err.name} `)
    }
}

module.exports = { AddUser }