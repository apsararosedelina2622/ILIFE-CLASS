// const PORT = 5000
// const express = require("express")
// const app = express()

// app.set("view engine" , "hbs")

// app.get("/" , (req , res) => {
//     res.render("index" , { title : "Home Page" , message :  "Welcome to Express!" })
// })

// app.get("/about" , (req , res) => {
//     var title = "About Page"
//     // res.render("about" , { title : "About Page" })
//     res.render("about" , { title })
// })

// app.listen(PORT , () => {
//     console.log("working!...")
// })


const PORT = 5000
const express = require("express")
const path = require("path")

const app = express()

app.set("view engine", "hbs")

app.set("views" , path.join(__dirname , "public"))

app.get("/" , (req , res) => {
    res.render("index" , { title : "Home Page" , message : "Welcome to Express!" })
})

app.get("/about" , (req , res) => {
    res.render("about" , { title : "About Page" })
})

app.listen(PORT  , () => {
    console.log("working!")
})