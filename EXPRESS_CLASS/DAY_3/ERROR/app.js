const PORT = 5000;
const express = require("express")
const app = express()

app.get("/" , (req , res , next) => {
    const home = "Home Page"
    next(home)
})

app.get("/about" , (req , res , next) => {
    const about = "About Page"
    next(about)
})

app.get("/error" , (req , res , next) => {
    const error = new Error("Something went wrong!")
    next(error)
})

app.use((err , req ,res , next) => {
    if(err.name){
        res.send({
            name : err.name,
            message : err.message
        })
        console.log({
            name : err.name,
            message : err.message
        })
    }else{
        res.send(err)
        console.log(err)
    }
})

app.listen(PORT , () => {
    console.log("server running!")
})