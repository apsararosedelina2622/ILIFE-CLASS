// const PORT = 5000

// const express = require("express")
// const app = express()

// app.set("view engine" , "hbs")

// app.get("/" , (req , res) => {
//     res.render("index" , { title : "Home" , message : "Lorem ipsum dolor sit amet" })
// })

// app.listen(PORT , () => {
//     console.log("working!")
// })



const PORT = 5000

const express = require("express")
const app = express()

const path = require("path")

app.set("view engine" , "hbs")

app.set("views" , path.join(__dirname , "public"))

app.get("/" , (req , res) => {
    res.render("index" , { title : "Home" , message : "Lorem ipsum dolor sit amet" })
})

app.get("/about" , (req , res) => {
    res.render("about" , { title : "About" , message : "Lorem ipsum dolor sit amet" })
})

app.listen(PORT , () => {
    console.log("working!")
})