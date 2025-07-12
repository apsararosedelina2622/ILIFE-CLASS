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
        res.status(200).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
}

const getUser = async (req , res) => {
    try{
        const users = await userModel.find()
        res.status(200).send(users)
    }
    catch(err){
        res.status(200).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
}

const removeUser = async (req , res) => {
    try{
        await userModel.findByIdAndDelete(req.params.id)
        res.status(200).send("User Removed!")
    }
    catch(err){
        res.status(200).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
}

const loginUser = async (req , res) => {
    try{
        
        const { username , password } = req.body

        const user = await userModel.findOne({ username , password })
        if(user){
            res.status(200).send(user)
        }
        else{
            res.status(404).send("User Not Found!")
        }
    }
    catch(err){
        res.status(200).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
}

module.exports = { addUser , getUser, removeUser , loginUser }