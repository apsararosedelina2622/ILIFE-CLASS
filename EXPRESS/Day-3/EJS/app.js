// const express = require("express")
// const app = express()

// app.set("view engine" ,"ejs")

// app.get("/" , (req , res) => {
//     const username = "user"
//     const password = "User@123"
//     res.render("index" , { name : username , pwd : password })
// })

// app.listen(5000 , () => {
//     console.log("working!")
// })


const express = require("express")
const app = express()

const path = require("path")

app.set("view engine" ,"ejs")

app.set("views" , path.join(__dirname , "file"))

app.get("/" , (req , res) => {
    const username = "user"
    const password = "User@123"
    res.render("index" , { name : username , pwd : password })
})

app.get("/about" , (req , res) => {
    res.render("about" , { title : "About Page" })
})

app.listen(5000 , () => {
    console.log("working!")
})