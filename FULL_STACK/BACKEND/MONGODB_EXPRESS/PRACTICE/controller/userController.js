const userModel = require("../model/userModel")

const addUser = async (req , res) => {
    try{
        const userData = new userModel({
            name : req.body.name , 
            age : req.body.age , 
            place : req.body.place , 
            image : req.file.filename
        })
        userData.save()
        res.status(200).send("Userdata Added!")
    }
    catch(err){
        res.status(404).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
}

module.exports = addUser