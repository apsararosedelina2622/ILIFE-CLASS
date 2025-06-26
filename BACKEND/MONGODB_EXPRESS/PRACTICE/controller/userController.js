const AddUser = async (req , res) => {
    try{

    }
    catch(err){
        res.status(200).send(`Error Name : ${err.name} `)
    }
}

module.exports = { AddUser }