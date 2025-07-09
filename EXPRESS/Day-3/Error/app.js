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
    const error = new Error("Error Page")
    next(error)
})

app.use((err , req , res , next) => {
    if(err.name){
        res.send({
            error : err.name , 
            message : err.message
        })
    }
    else{
        res.send(err)
    }
})

app.listen(5000 , () => {
    console.log("working!")
})