const express = require("express")
const app = express()

app.set("view engine" , "hbs")

app.get("/" , (req , res) => {
    res.render("index" , { title : "Home Page" , name : "Rhythm" })
})

app.get("/about" , (req , res) => {
    res.render("about" , { title : "About Page" })
})

app.listen(5000)