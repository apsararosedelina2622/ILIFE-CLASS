const userModel = require("../model/userModel")

const addUser = async (req , res) => {
    try{

        const { username , password , email } = req.body

        const userData = new userModel({
            username , 
            password , 
            email
        })
        userData.save()
        res.status(200).send("User Data Added!")
    }
    catch(err){
        res.status(200).send(`Error Name : ${err.name} `)
    }
}

const getUser = async (req , res) => {
    try{
        const users = await userModel.find()
        res.status(200).send(users)
    }
    catch(err){
        res.status(200).send(`Error Name : ${err.name} `)
    }
}

const removeUser = async (req , res) => {
    try{
        await userModel.findByIdAndDelete(req.params.id)
        res.status(200).send("User Removed!")
    }
    catch(err){
        res.status(200).send(`Error Name : ${err.name} `)
    }
}

module.exports = { addUser , getUser, removeUser }