const userModel = require("../model/userModel");

const AddUser = async (req , res) => {
    try{
        const userData = new userModel(req.body)
        await userData.save()
        res.status(200).send("Data Added!")
    }
    catch(err){
        res.status(500).send(`Error : ${err.name} ${err.message}`)
    }
}

module.exports = { AddUser }