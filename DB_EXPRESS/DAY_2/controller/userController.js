const userModel = require("../model/userModel")

const AddUser = async (req , res) => {
    try{
        const userData = new userModel(req.body)
        await userData.save()
        res.status(200).send("Data Added!")
    }
    catch(err){
        res.status(404).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
}

const GetUser = async (req , res) => {
    try{
        const userList = await userModel.find()
        res.status(200).send(userList)
    }
    catch(err){
        res.status(404).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
}

const DeleteUser = async (req , res) => {
    try{
        await userModel.findByIdAndDelete(req.params.id)
        res.status(200).send("Data Removed Successfully!")
    }
    catch(err){
        res.status(404).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
}

const UpdateUser = async (req , res) => {
    try{
        const updatedUser = await userModel.findByIdAndUpdate(req.params.id , req.body , { new : true })
        res.status(200).send(updatedUser)
    }
    catch(err){
        res.status(404).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
}

module.exports = { AddUser , GetUser , DeleteUser , UpdateUser }