const fs = require("fs")
const path = require("path")

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

const deleteUser = async (req , res) => {
    try{
        const user = await userModel.findById(req.params.id)
        fs.unlinkSync(path.join(__dirname , "../uploads" , user.image))

        await userModel.findByIdAndDelete(req.params.id)
        res.status(200).send("Userdata deleted!")
    }
    catch(err){
        res.status(200).send(`Error Name : ${err.name} `)
    }
}

module.exports = { AddUser , deleteUser }