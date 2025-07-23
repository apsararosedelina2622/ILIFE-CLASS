const userModel = require("../model/userModel")

const addUser = async (req , res) => {
    try{

        const userData = new userModel({
            username : req.body.username , 
            password : req.body.password , 
            image : req.file.filename
        })
        await userData.save()
        res.status(200).send("Userdata Added!")
    }
    catch(err){
        res.status(404).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
}

module.exports = addUser